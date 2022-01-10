let name = {
  firstName: "Saurabh",
  lastName: "Jirapure",
};

let printName = function (hometown,state,country) {
  console.log(this.firstName + " " + this.lastName + "," + hometown + "," + state + "," + country);
};

let printMyName = printName.bind(name,"Akola");
printMyName("Maharashtra","India");

Function.prototype.mybind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0],[...params,...args2]);
    }
}

let printMyName2 = printName.mybind(name,"Pune","Maharashtra");
printMyName2("India");
