const Manager = require('../lib/Manager');

test('creates manager object',()=>{
   const manager = new Manager('Jorman',2,'jorman@me.com',3);
   
   expect(manager.office).toEqual(expect.any(Number));
});

test('gets manager office',()=>{
    const manager = new Manager('Jorman',2,'jorman@me.com',3);


    expect(manager.getOffice()).toEqual(expect.any(Number));
})

test('gets employee role', ()=>{
    const manager = new Manager ('Jorman',2,'jorman@me.com',3);

    expect(manager.getRole()).toBe('Manager');
})
