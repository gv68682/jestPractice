
// var utils  = require('course-utilities');
// var removeSNames = utils.load('./app.js', 'removeSNames');

//import removeSNames.require('./app.js)

// import {
//     removeSNames
// } from "./app.js";

const removeSNames = require('./app.js')


describe('removeSNames', () => {

    it('remove names start with s', () => {
         //Test 1   
        const names = [ "Start", "Where", "When", "start", "Why"]
        expect(removeSNames(names)).not.toContain("Start");
        expect(removeSNames(names)).not.toContain("start");
    });

    it('do not remove other names', () => {
        //Test 2  
       const names = [ "Start", "Where", "When", "start", "Why"]
       expect(removeSNames(names)).toContain("When");
       expect(removeSNames(names)).toContain("Why");
   });
})