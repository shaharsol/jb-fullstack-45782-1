"use strict";
function testAs() {
    console.log('test as');
    const yossi = {
        firstName: 'yossi',
        familyName: 'gold',
        birthdate: new Date()
    };
    const alex = {
        breed: 'snake',
        eat: () => console.log('im eating')
    };
    // whever i cant cast types in TS
    // i can cast to unknown and then to the desired type
    // bare in mind: all responibility is on you!
    // do it only on rare occasions:
    const ido = alex;
    console.log(ido.firstName);
}
testAs();
