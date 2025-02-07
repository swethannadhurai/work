alert("Welcome to the Foodie hub!\nMenu: \n1.Pizza \n2.Burger \n3.Pasta \n4.Salad");
const amitorder = prompt("amit, what would you like to order? (choose 1, 2, 3 or 4)");
const benorder = prompt("ben, what would you like to order? (choose 1, 2, 3 or 4)");

const chitraorder = prompt("chitra, what would you like to order? (choose 1, 2, 3 or 4)");

const divyaorder = prompt("divya, what would you like to order? (choose 1, 2, 3 or 4)");
alert(`you have ordered:\namit: ${amitorder}\nben: ${benorder}\nchitra: ${chitraorder}\ndivya: ${divyaorder}`);

let tablenumber = 5;
const restarantname ="The Foodie Hub!";
let isorderconfirm = true;
let orderconfirmation = isorderconfirm?"yes":"no" ;
console.log(`Table number:${tablenumber}`);
console.log(`Restarant name: ${restarantname}`);
console.log(`Is order confirm: ${orderconfirmation}`);

let totalbill = 2000;
let numberoffriends = 4;
let amntperperson = totalbill/numberoffriends;
console.log(`Total bill:${totalbill}`);
console.log(`Amount per person:${amntperperson}`);

function callwaiter(request){
    return `waiter, we need ${request}.`;
}
console.log(callwaiter("water"));
console.log(callwaiter("tissues"));


