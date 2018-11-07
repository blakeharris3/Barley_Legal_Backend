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
            // console.log(data[0], 'this is data')
        }).catch(error => {
            console.log(error)
            res.send(error)
        })
})

router.get("/logout", async (req, res)=>{
    try{
        await req.session.destroy((err)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json({
                    message: "logged out"
                })
            }
        })
    }
    catch(err){
        console.log(err)
    }
})

router.post("/register", async(req, res)=>{
    //console.log(req.body, 'req.body')
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
            data: 'login successful',
            userId: user._id             
        });
    }
    catch(err){
        console.log(err);
        res.json(err);
    };
});

router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({username:req.body.username});
        if(user.password === req.body.password){
          req.session.logged = true;
          req.session.userId = user._id 
          req.session.username = req.body.username;
          res.json({
            status: req.session.logged,
            name: req.session.username,
            data: 'login successful'
        });
        }else{
            res.json({
                status: false

            });
        }
    } catch (err) {
        console.log(err);
        res.send(err);
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
        res.send(err)
    }
})

// Update router for beer to try
router.put('/toTry', async (req, res) => {
    try {
        const beerToTry = await User.findByIdAndUpdate(req.session.id, {
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
        res.send(err)
    }
})

//Update router for beer disliked
router.put('/isDisliked', async (req, res) => {
    try {
        const dislikedBeer = await User.findByIdAndUpdate(req.session.id, 
            {$push:{
            isDisliked: req.body.name
        }}, {new: true})

        res.json({
            status: 200,
            data: dislikedBeer
        });
    } catch(err) {
        res.send(err)
    }
})





// Delete route for to Try
router.delete('/:id/isLiked', async(req, res) => {
    try {
        const deletedBeer = await User.findByIdAndUpdate(res.session.id, 
            {$pull:{
                isLiked: req.body.name
                
        }}, {new: true})
        res.json({
            status: 200,
            data: deletedBeer
        })
    } catch(err) {
        res.send(err)
    }
})

// Delete route for to Try
router.delete('/:id/toTry', async(req, res) => {
    try {
        const deletedBeer = await User.findByIdAndUpdate(res.session.id, 
            {$pull:{
                toTry: req.body.name
                
        }}, {new: true})
        res.json({
            status: 200,
            data: deletedBeer
        })
    } catch(err) {
        res.send(err)
    }
})

// Delete route for to Try
router.delete('/:id/isDisliked', async(req, res) => {
    try {
        const deletedBeer = await User.findByIdAndUpdate(res.session.id, 
            {$pull:{
                isDisliked: req.body.name
                
        }}, {new: true})
        res.json({
            status: 200,
            data: deletedBeer
        })
    } catch(err) {
        res.send(err)
    }
})





module.exports = router