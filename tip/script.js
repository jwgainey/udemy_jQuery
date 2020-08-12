
function calculateTip() {

    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    if (billAmount === "" || serviceQuality ==0 ) {
        return window.alert("Please enter some values to get this baby up and running!");
    }

    // checks if empty
    if(numPeople === "" || numPeople <=1){ 
        numbPeople = 1;

        document.getElementById("each").style.display="none";
    } else {
        document.getElementById("each").style.display="block";
    }

    // the math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total *100)/100;
    total = total.toFixed(2);

    // Display the tip
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML = total;


}


//hide tip amount
document.getElementById("totalTip").style.display="none";
document.getElementById("totalTip").style.display="none";

document.getElementById("calculate").onclick = function() { 
    calculateTip(); 
};