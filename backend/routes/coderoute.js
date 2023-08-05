const express=require("express")
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()

const code=express.Router()

code.get("/",(req,res)=>{
    res.send("code route")
})

code.post("/",async (req,res)=>{
    try {
        let {code,languageSelect}=req.body
       
        const openAi = new OpenAIApi(
            new Configuration({
              apiKey: process.env.apikey,
            })
        );
        
        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                  "role": "user",
                  "content": `convert ${code} to ${languageSelect}`
                }
                
              ],
            max_tokens: 1000,
            temperature: 1,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
         
        const reply = response.data.choices[0].message.content.trim()
        //console.log(reply)
        res.send({"updatecode":reply})
    } catch (error) {
        console.log(error)
    }
})

code.post("/debug", async (req,res)=>{
    try {
        let {code}=req.body
        //console.log(code)
        const openAi = new OpenAIApi(
            new Configuration({
              apiKey: process.env.apikey,
            })
        );
        
        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                  "role": "user",
                  "content": `debug ${code}`
                }
                
              ],
            max_tokens: 1000,
            temperature: 1,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
         
        const reply = response.data.choices[0].message.content.trim()
        //console.log(reply)
        res.send({"updatecode":reply})
    } catch (error) {
        console.log(error)
    }
})

code.post("/quality", async (req,res)=>{
    try {
        let {code}=req.body
        //console.log(code)
        const openAi = new OpenAIApi(
            new Configuration({
              apiKey: process.env.apikey,
            })
        );
        
        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                  "role": "user",
                  "content": `check the quality of ${code}`
                }
                
              ],
            max_tokens: 1000,
            temperature: 1,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
         
        const reply = response.data.choices[0].message.content.trim()
        //console.log(reply)
        res.send({"updatecode":reply})
    } catch (error) {
        console.log(error)
    }
})









module.exports={
    code
}