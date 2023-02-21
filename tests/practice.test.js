//Capitalize first letter Test
import capitalize from "../codes/capitalize";

test('take word test and return Test', () => {
    expect(capitalize('test')).toBe('Test');
})

test('Take the word review and return Review', () => {
    expect(capitalize('review')).toBe('Review');
})

//reverseString Test
import reverseString from "../codes/reverseString";

test('Take test and return tset', () => {
    expect(reverseString('test')).toBe('tset');
})

test('Take blue pill and return llip eulb', () => {
    expect(reverseString('blue pill')).toBe('llip eulb');
})

//Calculator Test
import calculator from "../codes/calculator";

test('calculator add function takes 1 + 2 and equals 3', () => {
    expect(calculator.add(1,2)).toBe(3);
})
test('calculator subtract function takes 5-3 and equals 2', () => {
    expect(calculator.subtract(5,3)).toBe(2);
})
test('calculator multiply function takes 4 * 5 and equals 20', () => {
    expect(calculator.multiply(4,5)).toBe(20);
})
test('calculator divide function takes 15 / 3 and equals 5', () => {
    expect(calculator.divide(15,3)).toBe(5);
})

//Caesar Cipher Test
import caesarCipher from "../codes/caesarCipher";

test('take test and return uftu', () => {
    expect(caesarCipher('test',1)).toBe('uftu');
})
test('take zebra and return bgdtc', () => {
    expect(caesarCipher('zebra', 2)).toBe('bgdtc');
})
test('take blue. pill and return cmvf. qjmm', () => {
    expect(caesarCipher('blue. pill', 1)).toBe('cmvf. qjmm');
})
test('take HEllo and return KHoor', () => {
    expect(caesarCipher('HEllo', 3)).toBe('KHoor');
})

//Analyze Array test
import analyzeArray from "../codes/analyzeArray";

test.only('Test that function returns object with the following values', () => {
    expect(analyzeArray([1,2,3,4,5])).toStrictEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    })
})
