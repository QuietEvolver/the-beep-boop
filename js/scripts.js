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
    event.preventDefault();
    console.log("fxn-inner");
    //spec#1
    let inputNumber = parseInt($("#input-number").val());
    console.log("Submit button Event Input",inputNumber);
  
    //spec#3 
    let outputString = "";
    
    //spec #2
    for (let i = 0; i <= inputNumber; i++){ //4to1ie.  for (let i = inputNumber; i >= 0; i--){ 
        console.log("Inside for loop!", i);
        //function created below to capure each i and fxn does the core work;
        let output =  selectOutput(i);
        console.log(output);
        //spec#3 finds the exception 1="Beep!"
        if (i === inputNumber){ 
            //removes the comma at end of i loop
            //replace i iteration w output captured values housing all evaluations of i at each iteration equaling the outcome list string.
            outputString += (output);
        } 
        else{ 
            // strings in order
            outputString += (output+ "\,");
        }
        console.log(outputString);            
        }     

    //call id to display output
    //shows all on html; just one line!
    $("#result").text(outputString);    
    });
    console.log("fxn-outer");
});
//create a fxn to take in the output.split
//number is a keyword so must type "num" for arg in JS
function selectOutput(num) {
    let n = num.toString();
    let nArr = n.split('');
    //creating var for overwrite by 1,2,3; starting at 0 b/c we must start at 1 for importance of NumVal '1,2,3'aka"Beep!","boop", "dave" b/c Zero is Less Than (or =) 1 (per my logic)
    let valNumImportance = 0;
    //how do I get a number out of an array??
    for (let i=0; i < nArr.length; i++) {
        //already have the i = looped nums; change the arr of string Obj to int arr.
        //getting 1 num at a time from 0 to original ceiling.
        let nArrNum = parseInt(nArr[i]);
        console.log(nArrNum);
        if((nArrNum === 1)||(nArrNum === 2)||(nArrNum === 3)) {
            if( nArrNum > valNumImportance){
                //reassigning the valNumImportance for comparison/weighing.
                valNumImportance = nArrNum;
                console.log("value Number Importance to be assigned output", valNumImportance)
                if (valNumImportance === 3) {
                    return "I'm sorry, Dave. I'm afraid I can't do that.";
                }
                //after we save valofImportc return the output. if <3, must go out of for loop b/c it's done(highest it can go); & Check what we need to output bvased on  val of Importce.
            }
        }
    }
    if (valNumImportance === 1){
        return "Beep!"
    } else if (valNumImportance === 2){
        return "Boop!"
    } else {
        return num;
    }
}