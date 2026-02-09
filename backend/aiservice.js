aiservice.js

// Placeholder AI logic
exports.classifyEmergency = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes("fire")) return "Fire Station";
    if (desc.includes("theft") || desc.includes("robbery")) return "Police";
    return "Ambulance";
};

exports.detectSeverity = (description) => {
    const length = description.length;
    if (length > 200) return "Critical";
    if (length > 100) return "High";
    return "Low";
};
