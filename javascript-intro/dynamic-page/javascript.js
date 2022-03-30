
//Define variables
var headlineArray = ["Next headline", "Another Headline" ,"Yet Another" , "Final Headline"];
var headlineIndex = 0;
var headlineLength = headlineArray.length;
var myLoop = setInterval(changeHeadline,1000);


//Function to loop through the headline array
function changeHeadline () {
  var headlineElement = document.getElementById("headline");
   var newHeadline = headlineArray[headlineIndex];
    //alert(newHeadline);
  headlineElement.innerHTML = newHeadline;
    headlineIndex++;
    	if ( headlineIndex >= headlineLength ) {
	clearInterval(myLoop);
	} 
}


//run the function
window.onload = changeHeadline(myLoop);
