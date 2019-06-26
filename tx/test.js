function Human(age = 18) {
    this.age = age;
}
Human.prototype.run = function () {
    console.log('the human is running~');
}



function Boy() {
    Human.call(this);
    this.sex = 'boy';
}
Boy.prototype = new Human();
Boy.prototype.jump = function () {
    console.log('the boy is jumping~');
}
// Boy.prototype.constructor = Boy;


// test
let theBoy = new Boy();
console.log(theBoy.run());
console.log(theBoy.jump());
console.log(theBoy instanceof Boy);

