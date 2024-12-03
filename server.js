/**
 * Logic for server
 * Logic to call openAi API's
 * Backend of the Application
 */

const OpenAI = require('openai');
const express = require('express');
require('dotenv').config();

/**
 * Make a connection with openai
 */

const openai = new OpenAI( //just made a connection
    {
        apiKey : process.env.OPENAI_API_KEY
    });

/**
 * Express server
 */

const app = express();
const port = 3000;
app.use(express.json());

//Expose the public files on server start
app.use(express.static('public'));

//Chat Support
const prompt = 'You are a pirate. Talk like a priate when responding to the question';
app.post('/chat', async(req, res) => {
    const { message } = req.body; //result of the body
    try{
        const response = await openai.chat.completions.create({
            model : 'gpt-3.5-turbo',
            messages : [
                {role : "system", content: prompt},
                {role : "user", content: message}
            ]
        });
        console.log(response);
        const botReply = response.choices[0].message.content;
        console.log(botReply);
        res.json({reply : botReply});
    }catch(error){
        console.error(error);
        res.status(500).send("Error Occured");
    }
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

