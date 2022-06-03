const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const tourist = require('../models/tourists');
const guide = require('../models/guides')

const db = "mongodb+srv://tourguide:projectmukkiyambigilu@tourguide.6za6e6y.mongodb.net/tourGuide";
mongoose.Promise = global.Promise;
mongoose.connect(db, err=>{
    if(err){
        console.log(err);
    }
});

router.get('/tourists', (req,res)=>{
    tourist.find()
    .exec((err,tourists)=>
    {
        res.json(tourists);
    });
});

router.get('/tourists/:id', (req,res)=>{
    tourist.findById(req.params.id)
    .exec((err,tourist)=>
    {
        res.json(tourist);
    });
});

router.post('/tourists', (req,res)=>{
    var newTourist = new tourist();
    newTourist.name = req.body.name;
    newTourist.email = req.body.email;
    newTourist.phone = req.body.phone;
    newTourist.password = req.body.password;
    newTourist.details = [];
    newTourist.plannedTrips = [];
    newTourist.currentTrip = {"none":"none"};
    newTourist.save((err,insertedTourist)=>{
        res.json(insertedTourist)
    });
});

router.put('/tourists/:id',(req,res)=>{
    tourist.findByIdAndUpdate(req.params.id,
    {
        $set : {
                details : req.body.details,
                plannedTrips : req.body.plannedTrips,
                currentTrip : req.body.currentTrip,
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                password : req.body.password
             }
    },
    {
        new: true
    },
    (err, updatedTourist)=>{
        res.json(updatedTourist);
    });
});

router.delete('/tourists/:id',(req,res)=>{
    tourist.findByIdAndRemove(req.params.id,(err,deletedTourist)=>{
        res.json(deletedTourist)
    })
})

router.get('/guides', (req,res)=>{
    guide.find()
    .exec((err,guides)=>
    {
        res.json(guides);
    });
});

router.get('/guides/:id', (req,res)=>{
    guide.findById(req.params.id)
    .exec((err,guide)=>
    {
        res.json(guide);
    });
});

router.post('/guides', (req,res)=>{
    var newGuide = new guide();
    newGuide.name = req.body.name;
    newGuide.email = req.body.email;
    newGuide.phone = req.body.phone;
    newGuide.password = req.body.password;
    newGuide.spot = req.body.spot;
    newGuide.gender = req.body.gender;
    newGuide.waitingOrders = [];
    newGuide.myTrips = [];
    newGuide.save((err,insertedGuide)=>{
        res.json(insertedGuide)
    });
});

router.put('/guides/:id',(req,res)=>{
    guide.findByIdAndUpdate(req.params.id,
    {
        $set : {
                myTrips : req.body.myTrips,
                waitingOrders : req.body.waitingOrders,
                gender : req.body.gender,
                spot : req.body.spot,
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                password : req.body.password
             }
    },
    {
        new: true
    },
    (err, updatedTourist)=>{
        res.json(updatedTourist);
    });
});

router.delete('/guides/:id',(req,res)=>{
    guide.findByIdAndRemove(req.params.id,(err,deletedGuide)=>{
        res.json(deletedGuide)
    })
})

module.exports = router;