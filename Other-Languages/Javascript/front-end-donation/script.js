// progressBar
var progressBar = document.querySelector(".progressBar");

// donate amout input
var donateAmout = document.querySelector("input.donnar");

// donate button -- Give Me button
var donateButton = document.getElementById("donate");

// amount required to reach the target
var amountRequired = document.querySelector("#amount-required");

// save button
var save = document.querySelector(".save");

//share button
var share = document.querySelector(".share");

// reason to share link
var reason = document.querySelector(".reason");


//Event listiners

//Click event on Give Me
donateButton.addEventListener("click", donateFunds);

// Click event on Save for later
save.addEventListener("click", saveLater);

//Click event to share with friends
share.addEventListener("click", shareWithFriends);

//Click event to know the reson to share
reason.addEventListener("click", reasonToShare);


//local variables
// total Funds
var totalFunds = 0;


//local storage
//localStorage.setItem('amount', totalFunds);

// functions

/*
    functionName: donateFunds
    Description : Collects funds from the donnar
*/

function donateFunds() {
    var amount = Number(donateAmout.value);

    var fundRequired = amountRequired.innerHTML;

    totalFunds = Number(localStorage.getItem("amount"));

    if (totalFunds >= 1000) {
        fundRaised.style.display = "block";
        progressBar.style.width = "100%";
        amountRequired.innerText = 0;
    } else if (amount > 0) {
        totalFunds = totalFunds + amount;
        localStorage.setItem("amount", totalFunds);
        amountRequired.innerText = 1000 - totalFunds;
        if (totalFunds > 1000) {
            progressBar.style.width = "100%";
            amountRequired.innerText = 0;
            document.querySelector(".msg").innerText = "Thanks for your support. Required Fund is raised.";
        } else
            progressBar.style.width = `${totalFunds/10}%`;

    } else {
        lessAmountModal.style.display = "block";
    }
}



/*
    functionName: saveLater
    Description: Display "Saved" Message
*/

function saveLater() {
    saveDialog.style.display = "block";
}

/*
    functionName: shareWithFriends
    Description: Share "Yay, I donated!" in Facebook and Twitter
*/

function shareWithFriends() {
    shareDialog.style.display = "block";
}



/*
    functionName: reasonToShare
    Description:  Modal dialog displaying the reson to share  
*/

function reasonToShare() {
    resonDialog.style.display = "block";
}

// modal dialog


// id of modal dialog when donation amount is less than $0
var lessAmountModal = document.getElementById("amountLessModal");

// id of modal dialog when progress-bar is completed
var fundRaised = document.getElementById("fundRaised");

// id of saveDialog
var saveDialog = document.getElementById("saveDialog");


// id of shareDialog
var shareDialog = document.getElementById("shareDialog");

// id for donationReason link dialog
var reasonDialog = document.getElementById("resonDialog");


// close button
var lessAmountClose = document.querySelector(".amountLessModal.close");
var fundRaisedClose = document.querySelector(".fundRaised.close");
var saveDialogClose = document.querySelector(".saveDialog.close");
var shareDialogClose = document.querySelector(".shareDialog.close");
var resonDialogClose = document.querySelector(".resonDialog.close");


lessAmountClose.onclick = function () {
    lessAmountModal.style.display = "none";
}

fundRaisedClose.onclick = function () {
    fundRaised.style.display = "none";
}

saveDialogClose.onclick = () => {
    saveDialog.style.display = "none";
}

shareDialogClose.onclick = () => {
    shareDialog.style.display = "none";
}

resonDialogClose.onclick = function () {
    resonDialog.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == fundRaised) {
        fundRaised.style.display = "none";
    } else if (event.target == lessAmountModal)
        lessAmountModal.style.display = "none";
    else if (event.target == saveDialog) {
        saveDialog.style.display = "none";
    } else if (event.target == shareDialog) {
        shareDialog.style.display = "none";
    } else if (event.target == resonDialog) {
        resonDialog.style.display = "none";
    }
}


document.querySelector("body").onload = function () {
    if (!localStorage.getItem('amount'))
        localStorage.setItem('amount', totalFunds);
    else {
        totalFunds = localStorage.getItem('amount');
        if (totalFunds < 1000) {
            progressBar.style.width = `${totalFunds / 10}%`;
            amountRequired.innerText = 1000 - totalFunds;
        } else {
            progressBar.style.width = `100%`;
            document.querySelector(".msg").innerText = "Thanks for your support. Required Fund is raised.";
        }

    }
}
