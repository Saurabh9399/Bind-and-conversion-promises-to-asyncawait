
let c1 = {
    x: 5,
    y: 10
};

let c2 = {
    x: 35,
    y: 282
}

function printCoordinates() {
    // console.log(this);
    console.log(this.x + ',' + this.y);
}

// window.x = 20;
// window.y = 45;


// printCoordinates();

let c1_func = printCoordinates.bind(c1);
let c2_func = printCoordinates.bind(c2);

c1_func();
c2_func();