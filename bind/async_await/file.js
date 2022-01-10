
async function fun() {
    console.log('Inside fun function');
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const users = await response.json();
    console.log('users resolved');
    return users;
}

console.log("Before calling fun")
let a = fun();
console.log("After calling fun")
console.log(a);
a.then(data => console.log(data));
console.log("Last line of this js file");