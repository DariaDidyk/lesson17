                                                                 // leson18

// class Human {
//     update() {
//         console.log(this);
//     }
// }

// function Humanfunc() {
//     // this.__proto__.update = function () {
//     //     console.log(this);
//     // };
// }

// Object.defineProperty(Human.prototype, 'update', {
//     enumerable: false, // то что перечесляется в цикле  если true
//     writable: false,  // вроде как не поменяется если true
//     configurable: false,  //возможность удалять свойство  если true
//     value: function () {
//         console.log(this);
//     },
// });

// Humanfunc.prototype.update = function () {
//     console.log(this);
// }

// console.log(new Human(), new Humanfunc());
// const a = class {};
// console.log(new Human);

class Leg {
    step() {
        console.log('Step...');
    }
}

class Hand {
    click() {
        console.log('Click');
    }
}

class Head {}

class Pair {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}

class Human {
    constructor(age) {
        this.legs = new Pair(new Leg(), new Leg());
        this.hands = new Pair(new Hand(), new Hand());
        this.head = new Head();
        this.age = age;
    }
}

class Women extends Human {
    constructor(age) {
        super(age);
        console.log('Hello women');
    }
}

class Man extends Human {
    constructor(age) {
        super(age);
        console.log('Hello man');
    }
}

class Employed {
    constructor(gender) {
        if (gender instanceof Human) {
            this.gender = gender;
        } else {
            throw new Error('Not a human');
        }
    }
}

class Developer extends Employed {
    code() {
        this.gender.hands.left.click();
        this.gender.hands.left.click();
    }
}
class JSDeveloper extends Developer {
    createMobileApp() {
        this.code();
    }
}

const jsDev = new JSDeveloper (new Women(18));
// console.log(jsDev);

jsDev.code();
jsDev.createMobileApp();

// const human = new Human();
// const man = new Man();
// const women = new Women();

// console.log(man, women, human);
// human.legs.left.step();

// function Constructor() {
//     this.legs = ['right', 'left'];
//     this.hands = ['right', 'left'];
//     this.head = 'exists';
// }

// new Constructor();
// new Human();