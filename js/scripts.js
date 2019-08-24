/* 
Spec : Input a number
Spec #: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"
Spec:  - Question, How do i make a string that takes one loop's output and have commas,  note: if my output is a str- no need to convert to arr[] and then back to "str"; too much work.
BEFORE i start coding, exhaust all possibilities of WHAT I can do. 
hint: start w empty str.  concat each num to said string. look at ie.  run code; try my type & fix any diffs not yielding desired output. 


*/

$(document).ready(function(){
   $("form").submit(function(event){
    console.log("fxn-inner");
    let inputNumber = parseInt($("#input-number").val());//spec#1
    console.log("Submit button Event function: Input",inputNumber);

        for (let i = inputNumber; i >= 0; i--){
            console.log("Inside for loop!", i);
                //why did this not work: return inputNumber(count);
              }
    });
    console.log("fxn-outer");
});