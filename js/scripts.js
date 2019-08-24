/* 
Spec : Input a number
Spec #: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"
*/

$(document).ready(function(){
   $("form").submit(function(event){
    console.log("fxn-inner");
    let inputNumber = parseInt($("#input-number").val());//spec#1
    console.log("Submit button Event function: Input",inputNumber);

        for (let count = 0; ; count ++){
            console.log("Inside for loop!", count + inputNumber);
                if (count <= inputNumber.length);
                return result = $("#result").text(inputNumber); //this works; 
                //why did this not work: return inputNumber(count);
              }
        return result = $("#result").text(inputNumber);
        event.preventDefault();
    });
    console.log("fxn-outer");
});