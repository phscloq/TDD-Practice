import { analyzeArray } from "../codes/analyzeArray";
test('Analyze Array works!', ()=>{
expect(analyzeArray([3,5,6,10,1])).toStrictEqual({"average": 5, "length": 5, "max": 10, "min": 1});

})