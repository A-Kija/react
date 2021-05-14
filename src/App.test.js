import { shallow, mount } from 'enzyme';
import App from './App';
import React from 'react';


test('Pirmasis didelis testas', () => {
    expect(5 + 5).toBe(10);
    expect(5 + 10).not.toBe(10);
});


test('Antras didelis testas', () => {
    const obj = { savybe1: 1 }
    expect(obj).toBe(obj);
    expect(obj).toEqual(obj);
    // expect(obj).toBe({ savybe1: 1 });
    expect(obj).toEqual({ savybe1: 1 });
})


test('Ar geras Der Testas', () => {
  const comp = mount(<App/>);
  const h2 = <h2>SHIPS and TRAINS</h2>

  expect(comp.contains(h2)).toEqual(true);
  expect(comp.find("h2").length).toBeGreaterThan(0);

  expect(comp.derTest).toBe(89);
  
})