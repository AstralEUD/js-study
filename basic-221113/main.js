//https://youtu.be/KF6t61yuPCY
const objectTest1 = {
    name: 'Purk',
    age: 25,
}
const objectTest2 = {
    name: 'Kim',
    age: 21
}
if (objectTest1.age > objectTest2.age) {
    console.log("FIRST : "+objectTest1.name+" and SECOND : "+objectTest2.name+" and GAP : "+(objectTest1.age-objectTest2.age));
} else {
    console.log("FIRST : "+objectTest1.name+" and SECOND : "+objectTest2.name+" and GAP : "+(objectTest2.age-objectTest1.age));
}