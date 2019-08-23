/* 
Spec #1: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"
*/

$(document).ready(function(){
   $("form").submit(function(event){

    console.log("fxn-inner");
    let inputNumber = parseInt($("input#input-number").val());//spec#1
        console.log("Submit button Event function: Input",inputNumber);
    
        $("#result").text(inputNumber);
        console.log("fxn-outer");
        event.preventDefault();
    });
});