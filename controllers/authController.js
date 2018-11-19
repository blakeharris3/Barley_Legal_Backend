const express = require("express")
const router = express.Router();
const User = require("../models/user")
const fetch = require('node-fetch')

const getBeers = async() => {
    const beersJson = await fetch("https://sandbox-api.brewerydb.com/v2/beers?key=7d2b7088dd751a4d391faa03edcb0118")
    const beers = await beersJson.json()
    return beers
}


router.get("/", (req, res)=>{
        getBeers().then(beers => {
            res.json({
                data: beers,
                status: 200
            })
        }).catch(error => {
            console.log(error) // It's best to remove console logs from production level code
            res.send(error)
            /* For production level code, you typically never want to send the error to the
                client as there is private information included in your errors you never want
                to share. Especially if your user has malicious intent.

                In a situation like this, it would be a best practice to send a message instead
                ex... res.json({"response": 500, "message": "something went wrong, please try again later"})
             */
        })
})

router.get("/logout", async (req, res)=>{
    try{
        await req.session.destroy((err)=>{
            if(err){
                console.log(err) // It's best to remove console logs from production level code
            }
            else{
                res.json({
                    message: "logged out"
                })
            }
        })
    }
    catch(err){
        console.log(err) // It's best to remove console logs from production level code
        // make sure a response is sent back if an error occurs...see line 22
    }
})

router.post("/register", async(req, res)=>{
    try{
        const user = await User.create({
            username: req.body.username,
            password: req.body.password

        })
       
        req.session.userId = user._id;
        req.session.username = user.username;
        req.session.password = user.password;
        
        res.json({
            status: 200,
            data: 'register successful',
            userId: user._id             
        });
    }
    catch(err){
        console.log(err); // It's best to remove console logs from production level code
        res.json(err); // see line 22 for feedback on this error handling
    };
});

router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({username:req.body.username});
        if(user.password === req.body.password){
          req.session.logged = true;
          req.session.userId = user._id;
          req.session.username = req.body.username;
          res.json({
            name: user.username,
            logged: true,
            data: 'login successful',
            userId: user._id     
            });
        }else{
            res.json({
                logged: false

            });
        }
    } catch (err) {
        console.log(err); // It's best to remove console logs from production level code
        res.send(err); // see line 22 for feedback on this error handling
    }
    })
    

// Update route for liked beers
router.put('/isLiked', async (req, res) => {
    try {
        const addedLikedBeer = await User.findByIdAndUpdate(req.body.userId, {$push:{
            isLiked: req.body.name
        }}, {new: true})
        
        res.json({
            status: 200,
            data: addedLikedBeer
        });
    } catch(err) {
        res.send(err) // see line 22 for feedback on this error handling
    }
})

// Update router for beer to try
router.put('/toTry', async (req, res) => {
    try {
        const beerToTry = await User.findByIdAndUpdate(req.body.userId, {
            $push: {
            toTry: req.body.name
            }
        },
        { new: true })

        res.json({
            status: 200,
            data: beerToTry
        });
    } catch (err) {
        res.send(err) // see line 22 for feedback on this error handling
    }
})

//Update router for beer disliked
router.put('/isDisliked', async (req, res) => {
    try {
         await User.findByIdAndUpdate(req.body.userId, {
            $push: {
            isDisliked: req.body.name
            }
        }, 
        {new: true})
        
        res.json({
            status: 200,
            data: req.body.name
        });
    } catch(err) {
        res.send(err) // see line 22 for feedback on this error handling
    }
})



// Delete route for to Try
router.delete('/toTry', async(req, res) => {
    try {
        const deletedBeer = await User.findByIdAndUpdate(req.body.userId, 
            {$pull:{
                toTry: req.body.body
                
        }}, {new: true})


        res.json({
            status: 200,
            data: deletedBeer.toTry
        })
    } catch(err) {
        res.send(err) // see line 22 for feedback on this error handling
    }
})





module.exports = router