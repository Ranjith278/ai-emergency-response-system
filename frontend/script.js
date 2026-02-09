script.js

document.getElementById("emergencyForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const description = document.getElementById("description").value;
    const images = document.getElementById("images").files;
    const videos = document.getElementById("videos").files;

    const formData = new FormData();
    formData.append("description", description);
    for (let img of images) formData.append("images", img);
    for (let vid of videos) formData.append("videos", vid);

    const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    const statusDiv = document.getElementById("status");
    const statuses = ["Request Received", "Preparing", "Team Dispatched", "On the Way", "Action in Progress", "Resolved"];
    let i = 0;

    statusDiv.innerHTML = `
        <p>Emergency submitted at: ${result.timestamp}</p>
        <p>Detected Type: ${result.type}</p>
        <p>Severity Level: ${result.severity}</p>
        <p>Images: ${images.length}, Videos: ${videos.length}</p>
        <p id="liveStatus">Status: ${statuses[i]}</p>
    `;

    const interval = setInterval(() => {
        i++;
        if (i >= statuses.length) clearInterval(interval);
        else document.getElementById("liveStatus").textContent = `Status: ${statuses[i]}`;
    }, 2000);
});
