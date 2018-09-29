
class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }


  greet() {
    console.log("Hi there ES6 BADASSES! " + this.name + "my shribel is, " + this.favoriteColor + " rape me.");
  }
}


// module.exports = Person;  | node.js of doing things
export default Person; //nativejava in the making
