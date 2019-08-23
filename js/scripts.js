/* 
Spec #1: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"
*/

$(document).ready(function(){
    let beepBoop = $("form").submit(function(){
    event.preventDefault();
    let inputNumber = parseInt($("#input-number").val());//spec#1
        console.log("Submit button Event function: Input",inputNumber);
    });
    $("#result").beepBoop;
    console.log("fxn-outer");
});