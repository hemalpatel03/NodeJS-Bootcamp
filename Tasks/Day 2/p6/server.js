const _ = require('lodash');

function sumofEvenNumber(Number) {
    const EvenNumber = _.filter(Number, num => num % 2 === 0);
    return _.sumBy(EvenNumber);
}
const Number = [1,2,3,4,5,6,7,8,9,10];
console.log(sumofEvenNumber(Number)); // 30