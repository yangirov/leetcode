/**
 * @param {number} columnNumber
 * @return {string}
 */
const ABC_COUNT = 26;
const ASCII = 64;

var convertToTitle = function(columnIndex, letter = []) {
    if (columnIndex == 0) {
        return letter.reverse().join("").toUpperCase();
    }

    const index = columnIndex % ABC_COUNT || ABC_COUNT;
    letter.push(String.fromCharCode(ASCII + index));

    columnIndex = Math.floor(columnIndex / ABC_COUNT) - (index == ABC_COUNT || 0);
    return convertToTitle(columnIndex, letter);
};