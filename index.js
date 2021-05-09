let myFirstVar = 'Hello';
myFirstVar = 5;

const onlyOnce = 'Wordl';
// onlyOnce = 'Hello';


const s1 = 'I am a string';
const s2 = "Also a string";
const s3 = `String between backtick`;

const age = 27;
const text = `I am ${age} years old`;
const text2 = 'I am ' + age + ' years old';

const n1 = 5;
const n2 = 3.443333;
const n3 = Number('3');
const n4 = Number('not a number');

let isValid = true;
isValid = false;

let num = 5;

const foo = (n) => {
    n = n * 2;
    return n;
};

num = foo(num);

const o = {
    name: 'Zizi',
    favoriteNumber: 5
};

o.name = 'Xz';
o.favoriteNumber = 5;
console.log(o.name);

const a1 = [1, 2, 3];
const a2 = [1, 'Zizi', true];

a1.push(23);
a1.forEach(item => console.log(item));

const f = (a, b) => { return a + b; };

function f2 (a, b) {
    return a + b;
}

console.log(f(5, 6));
console.log(f('Zi', 'zi'));
console.log({}, {});

const f3 = i => i.foo();

// f3(3);

let pet = {
    name: 'Kitty',
    type: 'cat'
};

const bar = p => {
    p = {
        name: 'Doggy',
        type: 'dog'
    };
    return p;
};

console.log('Változó értéke a bar függvény előtt', pet);
pet = bar(pet);
console.log('Változó értéke a bar függvény után', pet);

const pet2 = {
    name: 'Sammy',
    type: 'snake'
};

const bar2 = p => {
    p.name = 'Hammy',
    p.type = 'hammster'
};

console.log('Változó értéke a bar2 függvény előtt', pet2);
bar2(pet2);
console.log('Változó értéke a bar2 függvény után', pet2);

let v;

console.log(v);

v = null;

console.log(v);

v = undefined;

const a = '5';
const b = 5;
console.log(a == b);
console.log(a === b);

const p1 = {name: 'Zizi'};
const p2 = {name: 'Zizi'};

console.log(p1 === p2);
console.log(p1 == p2);

const p3 = p1;

console.log(p1 === p3);
console.log(p1 == p3);

let d = 5;

d = '5';

d = [1, 2, 3];

d = i => console.log(i);

d('JavaScript');

document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('email');
    if (email) {
        document.getElementById('email').setAttribute('value', email);
    }
    document.getElementById('submit').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        console.log(email);
        console.log(document.querySelector('#feedback').value);
        localStorage.setItem('email', email);
    });
});