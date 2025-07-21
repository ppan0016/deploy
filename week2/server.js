// we need to include the module loaded

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// it is telling the server app to use the body parser middleware to parse any incoming content in the request body

// when we say app.use this is how the middleware is added to the express app

// the urlencoded data is the type of data usually sent through html forms using the post method

// extended true means if we use complex form elements like radio or select dropdown, it will nest those elements when returning the response.
app.use(bodyParser.urlencoded({extended:true}))

app. get ("/", (request,response)=>{
    response.send("<h1> Welcome to the Express Page </h1>")
})

app.get("/calculate", (request,response)=>{
    response.sendFile(__dirname + "/index.html")
})

app.post("/calculate", (request,response)=>{
    
    console.log("Posted content!")

    let num1 = Number(request.body.num1)
    let num2 = Number(request.body.num2)
    
    let calculate = num1 + num2

    response.send("The calculated sum is: "+calculate)
})

app.listen(3000, function (request, response){
    console.log("Server is running on port 3000!")
})