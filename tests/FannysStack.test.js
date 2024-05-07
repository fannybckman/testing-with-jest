const stack = require('../src/stack');


test('Ta bort från en tom stack returnerar undefined', () => {
    expect(stack.pop()).toBeUndefined();
});

test('Pop tömmer stacken', () => {
    stack.push(1);
    stack.pop();
    expect(stack.peek()).toBeUndefined();
});