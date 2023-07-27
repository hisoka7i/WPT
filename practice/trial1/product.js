// function Product_name(name,brand){
//     this.name = name;
//     this.brand = brand;
//
//     this.full_name = this.name + " " + this.brand;
// }
// export default Product_name;



console.log("3"==3)
//console.log(0.3 == 0.3)

console.log(parseFloat("3.0a70"))
console.log(parseInt("3_4"))
let x = true;
//console.log(new Date());
console.log(new Date().getDate());
let y  = [2,,24,2,,6,2]


let even = (e)=>{return e%2===0};
let z = y.flat();
console.log(y);
console.log(z);
//
console.log(z.some((even)=>{even%2==0}));

const ages = [3, 10, 18, 20];

let checkAdult = (d)=>{return d>18}

console.log(ages.some(checkAdult)) ;

var xx = 10.2121221;
console.log(xx.toPrecision(5));
