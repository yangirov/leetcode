/**
 * @param {number} n
 * @return {string[]}
 */

const gen = (divider, word) => (number) => number % divider === 0 ? word : ''
const fizz = gen(3, 'Fizz')
const buzz = gen(5, 'Buzz')

var fizzBuzz = function(n) {
    return [...Array(n).keys()].map(i => fizz(i+1)+buzz(i+1) || i+1).map(i => i.toString())
};