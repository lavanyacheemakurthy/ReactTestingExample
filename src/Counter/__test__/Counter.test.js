import React from 'react'
import Counter from '../Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;
beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})
// afterEach(() => {
//     cleanup();
// })
test('Header renders correct text', () => {
    const headerElement = getByTestId('header');
    expect(headerElement.textContent).toBe('My Counter');
})
test('Initial counter starts with text 0', () => {
    const counterEle = getByTestId('counter');
    expect(counterEle.textContent).toBe('0');
})
test('Input contains initial value at 1', () => {
    const inputEl = getByTestId('input');
    expect(inputEl.value).toBe('1');
})
test('Add btn renders with + sign', () => {
    const addBtn = getByTestId('add-btn');
    expect(addBtn.textContent).toBe('+');
})
test('Subtract btn renders with + sign', () => {
    const subtractBtn = getByTestId('subtract-btn');
    expect(subtractBtn.textContent).toBe('-');
})
test('Changing value of input works correctly', () => {
    const inputel = getByTestId('input');
    expect(inputel.value).toBe('1');
    fireEvent.change(inputel, {
        target: {
            value: '5'
        }
    });
    expect(inputel.value).toBe('5');
})
test('Clicking on plus btn adds 1 to counter', () => {
    const btnEl = getByTestId('add-btn');
    const counterEl = getByTestId('counter');

    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe('1');
})
test('Clicking on subtract btn adds 1 to counter', () => {
    const btnEl = getByTestId('subtract-btn');
    const counterEl = getByTestId('counter');

    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe('-1');
})
test('Changing input value and then clicking on plus btn works correctly', () => {
    const btnEl = getByTestId('add-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');
    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })
    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe('5');
})
test('Changing input value and then clicking on subtract btn works correctly', () => {
    const btnEl = getByTestId('subtract-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');
    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })
    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe('-5');
})
test('adding and subtracting leads to correct counter number', () => {
    const addBtnEl = getByTestId('add-btn');
    const subtractbtnEl = getByTestId('subtract-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');
    fireEvent.change(inputEl, {
        target: {
            value: '10'
        }
    })
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(subtractbtnEl);
    fireEvent.click(subtractbtnEl);
    expect(counterEl.textContent).toBe('20');
    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })
    fireEvent.click(addBtnEl);
    fireEvent.click(subtractbtnEl);
    fireEvent.click(subtractbtnEl);
    expect(counterEl.textContent).toBe('15');


})
test('Counter contains correct className', () => {
    const counterEl = getByTestId('counter');
    const addBtnEl = getByTestId('add-btn');
    const subtractbtnEl = getByTestId('subtract-btn');
    const inputEl = getByTestId('input'); fireEvent.change(inputEl, {
        target: {
            value: '50'
        }
    })
    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe('');
    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe('green');
    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe('green');
    fireEvent.click(subtractbtnEl);
    fireEvent.click(subtractbtnEl);
    expect(counterEl.className).toBe('');
    fireEvent.click(subtractbtnEl);
    fireEvent.click(subtractbtnEl);
    fireEvent.click(subtractbtnEl);
    fireEvent.click(subtractbtnEl);
    expect(counterEl.className).toBe('red');
})