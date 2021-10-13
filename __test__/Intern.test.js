
const Intern = require('../lib/Intern');

test('creates intern object',()=>{
  const intern = new Intern('Jorman',2,'jorman@me.com', 'Columbia');

  expect(intern.school).toEqual(expect.any(String));
});

test('gets interns role',()=>{
    const intern = new Intern('Jorman',2 , 'jorman@me.com', 'Columbia');

    expect(intern.getRole()).toBe('Intern');
});

test('gets intern school',()=>{
    const intern = new Intern('Jorman',2,'jorman@me.com', 'Columbia');

    expect(intern.getSchool()).toEqual(expect.any(String));
})