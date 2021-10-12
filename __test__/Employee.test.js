const Employee = require('../lib/Employee');

test('create an Employee object',()=>{
    const employee = new Employee('Jorman','jormn.m@gmail.com');

    expect(employee.name).toBe('Jorman');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets Employee role',()=>{
    const employee = new Employee('Jorman','jormn.m@gmail.com');

    expect(employee.getRole()).toEqual(expect.any(String));
})

test('gets employee name', ()=>{
    const employee = new Employee('Jorman','jormn.m@gmail.com');

    expect(employee.getName()).toBe('Jorman');
});

test('gets employee id',() =>{
 const employee = new Employee('Jorman','jormn.m@gmail.com');

 expect(employee.getId()).toEqual(expect.any(Number));
}); 

test('gets employee email',() =>{
    const employee = new Employee('Jorman','jormn.m@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})
