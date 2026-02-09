routes.js

const aiService = require("./aiService");

exports.handleEmergency = (req, res) => {
    const description = req.body.description;
    const images = req.files["images"] || [];
    const videos = req.files["videos"] || [];

    // Call AI service (placeholder)
    const type = aiService.classifyEmergency(description);
    const severity = aiService.detectSeverity(description);

    res.json({
        type,
        severity,
        timestamp: new Date().toLocaleString()
    });
};
