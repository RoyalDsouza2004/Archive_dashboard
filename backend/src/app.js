import express from 'express'


const port = 4000

const app = express()

app.use(express.json());

app.get('/' , (req, res)=>{
      res.send("Api working")
})


app.listen(port , ()=>{
      console.log(`server is working on http://localhost:${port}`)
})