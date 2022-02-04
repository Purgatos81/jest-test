import { sum } from'./sum';
import { subtract } from './sum';
import { divide } from './sum';
import { multiply } from './sum';

test('adds 1 + 2 to equal 3', () => {  
    expect
    (sum(1, 2)
    ).toBe(3);
});

test('adds 3 - 2 to equal 1', () => {  
    expect
    (subtract(3, 2)
    ).toBe(1);
});

test('divide 4 / 2 to equal 2', () => {  
    expect
    (divide(4, 2)
    ).toBe(2);
});

test('multiply 4 * 2 to equal 8', () => {  
    expect
    (multiply(4, 2)
    ).toBe(8);
});