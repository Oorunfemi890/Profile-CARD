function updateTime() {
    const utcElement = document.querySelector(".utc-time");
    const now = new Date();
    const utcTime = now.toUTCString();
    utcElement.textContent = `🌍 UTC Time: ${utcTime}`;
}

setInterval(updateTime, 1000);
updateTime();
