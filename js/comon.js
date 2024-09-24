//   ------------------function for ratuls donation card 1 -----------------------------------


document.getElementById("donate-btn1").addEventListener("click", function () {
  const donationInput = document.getElementById("donation-amount1");
  const donationAmount = parseFloat(donationInput.value);
  const donationBox = document.getElementById("donation-box1");
  const targetAmountBox = document.getElementById("target-amount");

  let donatedAmount = parseFloat(donationBox.textContent);
  let targetAmount = parseFloat(targetAmountBox.textContent);

  if (donationAmount > 0) {

    donatedAmount += donationAmount;
    targetAmount -= donationAmount;

    donationBox.textContent = donatedAmount.toFixed(2);
    targetAmountBox.textContent = targetAmount.toFixed(2);
    alert("Your donation has been successfully added. Thank you for your generous contribution!.");


    const donation = {
      card: "Flood at Noakhali, Bangladesh",
      amount: donationAmount,
      date: new Date().toLocaleString()
    };


    let donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];


    donationHistory.push(donation);


    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));


    const modal = document.getElementById("success-modal");
    modal.style.display = "block";
  } else {
    alert("Please enter a valid donation amount.");
  }


  donationInput.value = "";
});



//   ------------------function for ratuls donation card 2 -----------------------------------

document.getElementById("donate-btn2").addEventListener("click", function () {
  const donationInput = document.getElementById("donation-amount2");
  const donationAmount = parseFloat(donationInput.value);
  const donationBox = document.getElementById("donation-box2");
  const targetAmountBox = document.getElementById("target-amount");

  let donatedAmount = parseFloat(donationBox.textContent);
  let targetAmount = parseFloat(targetAmountBox.textContent);

  if (donationAmount > 0) {

    donatedAmount += donationAmount;
    targetAmount -= donationAmount;

    donationBox.textContent = donatedAmount.toFixed(2);
    targetAmountBox.textContent = targetAmount.toFixed(2);
    alert("Your donation has been successfully added. Thank you for your generous contribution!.");


    const donation = {
      card: "Injured in the Quota Movement",
      amount: donationAmount,
      date: new Date().toLocaleString()
    };


    let donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];


    donationHistory.push(donation);


    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));


    const modal = document.getElementById("success-modal");
    modal.style.display = "block";
  } else {
    alert("Please enter a valid donation amount.");
  }


  donationInput.value = "";
});



// ---------------------------function for ratuls donation   card-3 ------------------------------


document.getElementById("donate-btn3").addEventListener("click", function () {
  const donationInput = document.getElementById("donation-amount3");
  const donationAmount = parseFloat(donationInput.value);
  const donationBox = document.getElementById("donation-box3");
  const targetAmountBox = document.getElementById("target-amount");

  let donatedAmount = parseFloat(donationBox.textContent);
  let targetAmount = parseFloat(targetAmountBox.textContent);

  if (donationAmount > 0) {

    donatedAmount += donationAmount;
    targetAmount -= donationAmount;

    donationBox.textContent = donatedAmount.toFixed(2);
    targetAmountBox.textContent = targetAmount.toFixed(2);
    alert("Your donation has been successfully added. Thank you for your generous contribution!.");


    const donation = {
      card: "Flood Relief in Feni,Bangladesh",
      amount: donationAmount,
      date: new Date().toLocaleString()
    };


    let donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];


    donationHistory.push(donation);


    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));


    const modal = document.getElementById("success-modal");
    modal.style.display = "block";
  } else {
    alert("Please enter a valid donation amount.");
  }


  donationInput.value = "";
});

