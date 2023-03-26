import { capitalize } from "../codes/capitalize";
test('first letter is capitalized', ()=>{
    expect(capitalize('hasan')).toBe('Hasan');
})