// Copy Server Address Functionality
document.querySelector(".copy-btn").addEventListener("click", () => {
    const serverAddress = "PLAY.EYSERVER.COM";
    navigator.clipboard.writeText(serverAddress);
    alert("Server address copied to clipboard!");
});
