// const obj = {
//     _list: [1,1,2],
//     // getList() {
//     //     return new Set(this._list);
//     // },
//     // getList(value) {
//     //     this._list.push(value);
//     // },

//     get list() {
//         return new Set(this._list)
//     },
//     set list(value) {
//         this._list.push(value);
//         document.body.innerHTML = this._list.toString();
//     }
// };

// Object.defineProperty(obj, 'list', {
//     get: function() {
//         return new Set(this._list);
//     },
//     set: function(value) {
//         this._list.push(value);
//         // console.log('Hello world');
//     },
// });
// let value = 0;
// setInterval(() => {
//     obj.list = ++value;
//     document.body.innerHTML = Array.from(obj.list).toString();
// }, 1000);

// // obj.list = 5;

// console.log(obj.list, obj);

// const wrap = (obj) =>{
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const element = obj[key];
//             delete obj.value;
//             Object.defineProperty(obj, key, {
//                 get: function() {
//                     return obj[`_${key}`];
//                 },
//                 set: function(value) {
//                     obj[`_${key}`] = value;
//                     this.render();
//                     // console.log('Hello world');
//                 },
//             });
//         }
//     }
// }
// const obj = {
//     value: 2,
//     name: 'Vasya',
//     render(){
//         document.body.innerHTML = `${this.name}: ${this.value}`;
//     },
// }

// wrap(obj);

// console.log(obj);

// Object.prototype.someNewMethod = function () {
//     console.log(this);
// }

// const obj = {
//     a: 2,
// }
// console.log(obj);

// function Employed(salary) {
//     this.level = 1;
//     this.salary = salary;

//     // this.__proto__ = {
//     //     method: function(){
//     //         console.log(this.salary);
//     //     },
//     // };
// }

// Employed.prototype.upgrade = function () {
//     console.log(this.salary);
//     this.salary = this.salary = this.salary + this.salary * (this.level++ / 10);
// };

// function Manager() {
//     Employed.call(this, 500);
// }

// Manager.prototype = Object.create(Employed.prototype);
// // Manager.prototype.estimate = function () {
// //     console.log('estimation...');
// // };
// Manager.prototype.constructor = Manager;

// Developer.prototype = Object.create(Employed.prototype);
// Developer.prototype.constructor = Developer;

// function Developer() {
//     Employed.call(this, 1000);
// }

// const a = new Manager();
// const b = new Developer();
// a.upgrade();
// a.upgrade();
// a.upgrade();
// a.upgrade();
// a.upgrade();
// a.upgrade();
// console.log(a);

// b.upgrade();
// b.upgrade();
// b.upgrade();
// b.upgrade();
// b.upgrade();
// b.upgrade();
// console.log(b);
