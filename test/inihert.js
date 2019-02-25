var F = new Function('', 'return 1;');


const inherits = require('util').inherits;

function ClassA() {
    this.pro = 'classA pro';
}
ClassA.prototype.out = () => {
    console.log('out');
};

function ClassB() {
    ClassA.call(this);
    this.pro = 'classB pro';
}


// const A = new ClassA();
// console.log(A.pro);
// A.out();

// ClassB.prototype = A;
// ClassB.constructor = ClassB;


var inherit = (function(c,p){
	var F = function(){};
	return function(c,p){
		F.prototype = p.prototype;
		c.prototype = new F();
		c.uber = p.prototype;
		c.prototype.constructor = c;
	}
})();
// inherit(ClassB, ClassA);

inherits(ClassB, ClassA);

const B = new ClassB();

for (let i in B) {
    console.log(i, B[i]);
}
B.out();



