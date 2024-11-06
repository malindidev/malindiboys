function purchaseItem(rank) {
    alert(`Purchasing ${rank} rank...`);
    // Send rank to backend for processing
    fetch('https://your-backend-url/purchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rank: rank }),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while processing your purchase.');
        });
}
