const capitalize = require('./Capitalize.js')

test('First letter should be capital', () => { 
    expect(capitalize("cat")).toEqual('Cat')
 })