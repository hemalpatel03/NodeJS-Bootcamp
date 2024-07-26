// a) Given a JSON data string: {"product": "Laptop", "price": 999.99}, explain how you would
// parse it into a JavaScript object.


const jsonData = '{"product": "Leptop", "price": 999.99}';
const parsedObject = JSON.parse(jsonData);
console.log("1)", parsedObject.product);
console.log("1)", parsedObject.price);

//  b) You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data string?

const ObjectToConvert = {"name": "Bob", "age": 30};
const jsonString = JSON.stringify(ObjectToConvert);
console.log("2)", jsonString);