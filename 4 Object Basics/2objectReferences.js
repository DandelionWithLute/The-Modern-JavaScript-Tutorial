let a = { name: "John" };
let b = { name: "John" };
// b=a
console.log(a == b);
console.log("https://javascript.info/object-copy");
let user = { name: "John Doe" };
let permission1 = { canView: true };
let permission2 = { canEdit: true };

//
// Important! Didn't know this before!
//
Object.assign(user, permission1, permission2);
console.log(user.canEdit, user.canView);

let objectToClone = {
  name: "Peter",
  age: 34,
  gender: "male",
  height: "175cm",
  weight: "70kg",
};

let clone = Object.assign({}, objectToClone);
console.log(clone)

// 
// Nested Cloning 
// 

let user1 = {
    name:"Kane",
    loveFood:{
        noodles:"lanzhou",
        drinks:"cococola"
    }
}

let clone1 = Object.assign({},user1)
console.log(user1.loveFood===clone1.loveFood)
console.log(clone1)
// Really Bad Since It was true, they happened to be the same object.

let clone1Fixed = structuredClone(user1)
console.log(clone1Fixed=== user1)