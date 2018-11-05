const express = require("express")
const router = express.Router();
const User = require("../models/user")

router.post("/register", async(req, res)=>{
    try{
        const theUser = await User.create({
            username: req.body.username,
            password: req.body.password

        })
        req.session.usersId = theUser._id;
        req.session.username = theUser.username;
        req.session.password = theUser.password;
        res.json({
             name: req.session.username,
             status: 200
        })
    }
    catch(err){
        console.log(err)
    }
})

router.post("/login", async(req, res) => {
    try {
        const user = await User.create(req.body);

        req.session.logged = true;
        req.session.username = req.body.username;
        res.json({
            status: 200,
            name: req.session.username,
            data: 'login successful'
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
    })
    

// Update route for liked beers
router.put('/isLiked', async (req, res) => {
    try {
        const addedLikedBeer = await User.findByIdAndUpdate(req.session.id, {$push:{
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