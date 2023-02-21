import capitalize from "../codes/capitalize";

test('take word test and return Test', () => {
    expect(capitalize('test')).toBe('Test');
})