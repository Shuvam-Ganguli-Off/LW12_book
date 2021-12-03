const express = require("express")
const app = express()
const mongoose = require("mongoose")
const stdschema = require("./schema")
const tempschema = require("./schema")
const url = "mongodb+srv://SG:w3tlNDes6SE66mn8@cluster0.cdacp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>console.log("Connected to database in MongoDB Atlas"))
app.use(express.json())
app.post("/add-new-info",async(req,res)=>{
    const stdbook = req.body.book_name;
    const stdissuer = req.body.name_of_issuer;
    const stddate = req.body.due_date;

    try{
        const newobj = new stdschema(
            {
                book_name:stdbook,
                name_of_issuer:stdissuer,
                due_date:stddate
            }
        )
        const savedinfo = await newobj.save();
        res.json(
            {"message":"Book Issue data saved","data":savedinfo}
        )
    }catch(err){
        res.json(err);
    }
})
app.use("/",(req,res)=>{
    res.json(
        {"message":"LW-12"}
    )
})

app.listen(3000,()=>console.log("Express Server Started"))