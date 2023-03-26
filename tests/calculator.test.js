import { calculator } from "../codes/calculator";
test('calculator works fine', ()=>{
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.substract(7,4)).toBe(3);
    expect(calculator.divide(15,5)).toBe(3);
    expect(calculator.multiply(7,2)).toBe(14);
    
})