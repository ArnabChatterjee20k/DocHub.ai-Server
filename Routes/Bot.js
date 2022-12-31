import express from "express"

const {Router} = express

const botRouter = Router()

botRouter.post("/",(req,res)=>{
    setInterval(()=>{
        res.status(200).send({
            bot:"lasjdfljdaslfj"
        })
    },3000)
})

export default botRouter;