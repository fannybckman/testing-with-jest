const stack = require('../src/stack');

test('')

test('strlk på stack ökas när man pushat element', () => {
    stack.push("wow");
    stack.push("coolt");
    expect(stack.size()).toBe(5);
});

test('strlk på stack minskar när man poppat element', () => {
    stack.push("eller");
    stack.push("kanske");
    stack.pop();
    expect(stack.size()).toBe(1);
});

test('strlk på tom stack är 0', () => {
    expect(stack.size()).toBe(0);
});