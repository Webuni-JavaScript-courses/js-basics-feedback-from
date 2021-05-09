let myFirstVar = 'Hello';
myFirstVar = 5;

const onlyOnce = 'World';
// onlyOnce = 'Hello'; // Hibát kapunk a böngészőben

const s1 = 'I am a string';
const s2 = "Also a string";
const s3 = `String between backticks`;

const age = 27;
const text = `I am ${age} years old`;
const text2 = 'I am ' + age + 'years old';

const n1 = 5;
const n2 = 3.4343;
const n3 = Number('2');
const n4 = Number('not a number'); // NaN

let isValid = true;
isValid = false;

let num = 5;

const foo = (n) => {
    n = n * 2;
    return n;
}

console.log('num értéke a függvény előtt', num);
num = foo(num);
console.log('num értéke a függvény után', num);

const o = {
    name: 'Zizi',
    favoriteNumber: 5
};

const a1 = [1, 2, 3];
const a2 = [1, 'Zizi', true];

a2.push(false);
a2.forEach((item) => {
    console.log(item);
});

const f = (a, b) => { return a + b; }

console.log(f(5, 6));
console.log(f('Zi', 'zi'));
console.log(f({}, {}));

const f2 = (i) => { console.log(i.foo()); }
// f2(3); // Hiba

let pet = {
    name: 'Kitty',
    type: 'cat'
};

const bar = (p) => {
    p = {
        name: 'Doggy',
        type: 'dog'
    }
    return p;
};

const bar2 = (p) => {
    p.name = 'Snakey';
    p.type = 'snake'
};

console.log('Változó értéke a függvény előtt', pet);
pet = bar(pet);
console.log('Változó értéke a függvény után', pet);

const pet2 = {
    name: 'Hammy',
    type: 'hammster'
};

console.log('Változó értéke a függvény előtt', pet2);
bar2(pet2);
console.log('Változó értéke a függvény után', pet2);

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
const p3 = p1;

console.log(p1 === p2);
console.log(p1 === p3);

let d = 5;
d = '5';
d = [1, 2, 3];
d = (i) => {console.log(i)};

d('JavaScript');

document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('email');
    if (email) {
        document.getElementById('email').setAttribute('value', email);
    }
    document.getElementById('submit').addEventListener('click', e => {
        const email = document.getElementById('email').value;
        localStorage.setItem('email', email);
        console.log(email);
        console.log(document.getElementById('feedback').value);
    });
});

