const createHtml = require('./src/html-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer= require('inquirer');
const fs =require('fs');


const employeeArr =[];

const createManager = () =>{
    const validateNumbers = () => ({
        validate: input => {
            if (input === '' || (isNaN(input))) {
                return'Please provide a valid number greater then 0'
                
            }else {
                return true;
            }
            
        },
    });
    const validate = () =>({
        validate: input =>{
            if (!input || input === ''){
                return 'Please, provide an asnwer'
            }else {
                return true
            }
        }
    });
    const validateEmail = ()=>({
        validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          }
    });
 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your Manager's name?",
            ...validate()
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's ID?",
            ...validateNumbers()

        },
        {
            type:'input',
            name: 'email',
            message: "What is your manager's email?",
            ...validateEmail()

        },
        {
            type:'input',
            name:'office',
            message: "What is your manger's office number?",
            ...validateNumbers()

        }
    ]).then(managerResponse =>{
        const {name,id,email, office} = managerResponse;
        const manager = new Manager(name,id,email,office);

        employeeArr.push(manager);
    });
};
// check for invalid inputs like strings
const createEmployee = () =>{
    const validateNumbers = () => ({
        validate: input => {
            if (input === '' || (isNaN(input))) {
                return'Please provide a valid number greater then 0'
                
            }else {
                return true;
            }
            
        },
    });
    // checks for empty or unanswered questions
    const validate = () =>({
        validate: input =>{
            if (!input || input === ''){
                return 'Please, provide an asnwer'
            }else {
                return true
            }
        }
    });

    // checks for correct email
    const validateEmail = ()=>({
        validate: answer => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          }
    });
   
    
    console.log(`
    ================================
     Add employees to the team page
    ================================`
    );

    return inquirer
    .prompt([
        {
            type: 'list',
            name:'role',
            message:"What kind of employee you want to add?",
            choices:['Engineer', 'Intern'],
           
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your  Employee's name?",
            ...validate()
        },
        {
            type: 'input',
            name:'id',
            message:"What is your ID?",
            ...validateNumbers()
        },
        {
            type:'input',
            name:'email',
            message:"What is your Employee Email?",
            ...validateEmail()
        },
        {
            type: 'input',
            name:'github',
            message:"What is your Engineer github account?",
            when:(input) => input.role ==='Engineer',
            ...validate()


        },
        {
            type:'input',
            name:'school',
            message:"What is the name of your school?",
            when:(input)=> input.role === 'Intern',
            ...validate()
        },{
            type:'confirm',
            name:'addOrContinue',
            message:"Do you want to add more team Members?",
            default:false

        }
    
    ]).then(employRes => {
        let {name, email,id, role, github, school, addOrContinue } = employRes;
        let employee;

        if(role === "Engineer"){
            employee = new Engineer(name,id,email,github);
        }else if (role === "Intern"){
            employee = new Intern (name, id, email, school);
        }

        employeeArr.push(employee);
         

        if (addOrContinue){
            return createEmployee(employeeArr);
        }else{
            return employeeArr;
        }
    })  
};

const writeFile = data =>{
    fs.writeFile("./dist/index.html", data, err =>{
        if (err){
            console.log(err);
            return;
        } else{
            console.log("Profile was succefully created, Click on dist and open the html file.")
        }
    })
};

createManager().then(createEmployee).then(employeeArr => {
    return createHtml(employeeArr);
}).then(htmlFile =>{
    return writeFile(htmlFile)
}).catch(err => {
    console.log(err)
})