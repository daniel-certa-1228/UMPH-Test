"use strict";

//prevent the defaul action of the submit button
$("form").submit(function(event){
    event.preventDefault();
});
//capitalizes the first letter of a string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function searchReplace(strOriginal, strReplaceable, strReplacement) {
    //create a new array by splitting the input string on spaces
    let stringArray = strOriginal.split(" ");
    //check each word to see if it matches the replaceable input
    let newStringArray = stringArray.map(function(word,index){
        // console.log(capitalize(strReplacement));
            if((word.toLowerCase() == strReplaceable) && (stringArray.indexOf(word) === 0)){
                //capitalizes the beginning of a sentecnce
                return capitalize(strReplacement);
            }  else if (word.toLowerCase() == strReplaceable) {
                return strReplacement;   
            }  else  {
                return word;
            }
    });
    //join array into the new string
    let finalString = newStringArray.join(" ");
    return finalString;
}

$("#submit").click(function(){
    //clear the output fields each time the submit button is pressed
    $("#output").html("");
    $("#flash").html("");
    //set vaiables to capture input
    let strOriginal = $("#strOriginal").val();
    let strReplaceable = $("#strReplaceable").val();
    let strReplacement = $("#strReplacement").val();
    // conditional to throw an error if there are any blank fields
    if(strOriginal === "" || strReplaceable === "" || strReplacement === "") {
        $("#flash").html(`Please fill in all 3 fields!`);
    }  else  {
        let outputString = searchReplace(strOriginal, strReplaceable, strReplacement);
        $("#output").html(`<p>${outputString}</p>`);
    }
})