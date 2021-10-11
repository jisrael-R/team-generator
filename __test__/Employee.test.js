const Employee = require('../lib/Employee');

test('create an Employee object',()=>{
    const employee = new Employee('Jorman',2,'jorman.iisrael@gmail.com');

    expect(employee.name).toBe('Jorman');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', ()=>{
    const employee = new Employee('Jorman',2,'jorman.iisrael@me.com');

    expect(employee.getName()).toBe('Jorman');
})