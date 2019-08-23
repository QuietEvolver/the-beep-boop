/* 
Spec #1: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"
*/

$(document).ready(function(){
   $("form").submit(function(event){
    console.log("fxn-inner");
    let inputNumber = parseInt($("#input-number").val());//spec#1
    console.log("Submit button Event function: Input",inputNumber);
    // let i;
    // let iLoopNumbers = [i];
    // inputNumber.forEach(function(iLoopNumbers){
    //     iLoopNumbers.push(inputNumS + "," + inputNumber);
    // });
    // if (inputNumber > 0) {
    //     return inputNumber
    // }
    for (let i = 0; i >= inputNumber.length; i -- ) { //inputNumberReturns
    // // let i = inputNumber;
        console.log(inputNumber[i]);

    };
    // for ( i = 0; i < inputNumber.length;) {
    //     console.log("inside loop:", inputNumber.i);
    //     text += inputNumber[i++];
    // }};

        // Attempting to dynamically populate the .html output:
        // let inputsAndOutputs = ["input-number","input-number-range-return"];
        // inputsAndOutputs.forEach(inputAndOutput => {
        //     let generatedIntegers = 
        // });
        // $("#result").text(inputsAndOutputs);

       // $("#result").text();
        event.preventDefault();
    });
    console.log("fxn-outer");
});