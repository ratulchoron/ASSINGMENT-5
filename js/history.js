// comon function for added  history in ratuls donation web page 


document.addEventListener('DOMContentLoaded', function() {
    const historyList = document.getElementById('donation-history-list');

    
    const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

    if (donationHistory.length === 0) {
        historyList.innerHTML = '<li>No donations made yet.</li>';
    } else {
        
        donationHistory.forEach(donation => {
            const listItem = document.createElement('li');
            listItem.textContent = `${donation.amount} BDT Donation to ${donation.card}:  on ${donation.date}`;
            historyList.appendChild(listItem);
        });
    }
});
