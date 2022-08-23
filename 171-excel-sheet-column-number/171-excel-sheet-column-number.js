/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(title) {
    return title
        .split('')
        .reduce((acc, x, i) => acc += (x.charCodeAt() - 64) * Math.pow(26, title.length - i - 1), 0);
};
