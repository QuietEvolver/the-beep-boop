/* 
Spec : Input a number
Spec #: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"
Spec:   Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
- Question, How do i make a string that takes one loop's output and have commas,  note: if my output is a str- no need to convert to arr[] and then back to "str"; too much work.
BEFORE i start coding, exhaust all possibilities of WHAT I can do. 
hint: start w empty str.  concat each num to said string. look at ie.  run code; try my type & fix any diffs not yielding desired output. 
*/

$(document).ready(function(){
   $("form").submit(function(event){
    console.log("fxn-inner");
    //spec#1
    let inputNumber = parseInt($("#input-number").val());
    console.log("Submit button Event Input",inputNumber);
  
    //spec#3 
    let outputString = "";
    
    //spec #2
    for (let i = 0; i <= inputNumber; i++){ //4to1ie.  for (let i = inputNumber; i >= 0; i--){ 
        console.log("Inside for loop!", i);
            //why did this not work: return inputNumber(count);
        //spec#3 finds the exception 1="Beep!"
        if (i === inputNumber){ 
            //removes the comma at end of i loop
            outputString += (i);
        } 
        else{ 
            // strings in order
            outputString += (i+ "\,");
        }
        console.log(outputString);
        //if (i===1){ 
            // let one = 1;
            // one = "Beep!"
   //  attempt 1       console.log("Displaying the js literal string notation-?", i.replace(1 , "(`\"Beep\!\"\, `)"));
       //  att2  console.log(`The number "${one}" ${i.includes(one)? 'is' : 'is not'} in the output`);
       // att3  
    //    var re = /(\w+)\1(\w+)/;
    //         var str = `\"Beep\!\"\, `;
    //         var newstr = str.replace(re, '$2, $1');
    //     console.log(newstr);  // Smith, John

            
        //spec 3.a: Else, display all; else {
            
        }  
    
              
    });
    console.log("fxn-outer");
});