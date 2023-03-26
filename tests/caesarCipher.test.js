import { ceaserCipher } from "../codes/caesarCipher";

test('It match the alphabet', ()=>{
    expect(ceaserCipher('hegel! zy', 2)).toBe('jgign! ba');
})