/* 
Spec #1: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"
*/

$(document).ready(function(){
   $("form").submit(function(event){

    console.log("fxn-inner");
    let inputNumber = [];
    inputNumber = parseInt($("input#input-number").val());//spec#1
        console.log("Submit button Event function: Input",inputNumber);
        let i; 
        for (i = 0; i > inputNumber.length; i--) {
            const inputNumberRangeReturn = inputNumber[i];
            console.log(inputNumberRangeReturn);
            return inputNumberRangeReturn;
        };
        $("#input-number-range-return")
        $("#result").text(`<li>`+inputNumber, inputNumberRangeReturn);
        console.log("fxn-outer");
        event.preventDefault();
    });
});