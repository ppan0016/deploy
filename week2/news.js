const express = require("express")
const bodyParser = require("body-parser")

// built in node module to make https request 
// (important to let mailchimp know that the requests are from a secure source)
const https = require("https")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/news.html")
})

app.post('/' , (req,res)=>{
    const firstname = req.body.first_name

    console.log(firstname)
    const lastname = req.body.last_name
    console.log(lastname)

    const email = req.body.email

    //a JSON object containing an array of members with email, status, and merge fields (like first and last name).

    const data = {
        members:[
            {
            email_address : email,
            status: "subscribed",
            merge_fields: {
                FNAME : firstname,
                LNAME : lastname
            }
        }
        ]

        }

        // /This format can be sent in HTTP requests 
    var jsonData = JSON.stringify(data)
    
    const url = "https://us17.api.mailchimp.com/3.0/lists/b46f3669a9"
    const options= {
        method :"POST",
        auth:"poojlipop:4b9e0ca92af4a112a9de0a107ef49ba5-us17"
    }

    //Creates an HTTPS POST request to the Mailchimp API.
    const request = https.request(url, options, function(response) {

        
    //Listens for data events — chunks of the response body sent by Mailchimp.
    response.on("data", function(data) {
        var result = JSON.parse(data)
        
        if (result.error_count >= 1) {
            res.sendFile(__dirname + "/failure.html");
        } else {
            res.sendFile(__dirname + "/success.html");
        }
    })
})

    request.write(jsonData)
    request.end()
})
app.listen(8080, function(){
console.log("Server is running on port 8080")
})

