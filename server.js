const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static('public'));


app.post('/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    
        const payload = {
            contents: [
                {
                    parts: [
                        {
                            text: `You are my personal assistant. Guide me for what i ask. User says: "${message}"`
                        }
                    ]
                }
            ]
        };

    
        const apiResponse = await model.generateContent(payload);

    
        const botResponse =
            apiResponse.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Arrr! No response available, matey!";

    
        res.json({ reply: botResponse });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("Error occurred while processing your request.");
    }
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
