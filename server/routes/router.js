const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");





router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {FirstName,LastName,Email,Contact,Gender,Birthday,Address,Nationality,State,City,Zip,Skills,PastAssignment,PresentAssignment} = req.body;

    if(!FirstName || !LastName || !Email || !Contact || !Gender || !Birthday || !Address || !Nationality || 
        !State || !City || !Zip || !Skills || !PastAssignment || !PresentAssignment){
        return  res.status(422).json({error :"plz fill the data" });
    }
        
     users.findOne({Email:Email})
        .then((userExist )=> {
            if(userExist){
                res.status(422).json("this is user is already present");
            
        } 

       
            const user = new   User({
                FirstName,LastName,Email,Contact,Gender,Birthday,Address,Nationality,State,City,Zip,Skills,PastAssignment,
                PresentAssignment
            });

            user.save().then(() => {
                res.status(201).json({message : "user registered successfuly"})
            }).catch((err) => res.status(500).json({error:"failed to registered"}));

         }).catch(err => { console.log(err);});
        

});




module.exports = router;









