const Engineer = require('../lib/Engineer');

test('creates engineer object',()=>{
    const engineer = new Engineer('Jorman',2,'jorman@me.com','jisrael');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets github account from Engineer',()=>{
const engineer = new Engineer('Jorman',2,'jorman@jorman.com', 'jisrael');

expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets employee role',() =>{
const engineer = new Engineer('Jorman',2,'jorman@jorman.com', 'jisrael');
 
expect(engineer.getRole()).toBe('Engineer');
});