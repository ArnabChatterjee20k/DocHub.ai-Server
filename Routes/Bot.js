import express from "express"
import fetchPrompt from "../Services/FetchPrompt.js"

const {Router} = express

const botRouter = Router()

botRouter.post("/", async(req,res)=>{
    const prompt = req.body.prompt;
    const response = await fetchPrompt(prompt)
    res.status(200).send({
        bot:response.data.choices[0].text
    })
})

export default botRouter;