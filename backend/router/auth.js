const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
require('../db/conn');
const user = require('../model/userSchema');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const { Console } = require('console');
const e = require('express');

// router.get('/', (req, res) => {
//     res.send(`HELLO WORLD FROM ROUTER`);
// })

//Register Validation And Sending Data to DB

router.post('/register', (req, res) => {
    const {user_id, name, gender, dob, email, reg_no, block, room, phone, type, access, pwd, cpwd} = req.body
    user.findOne({ email: email })
    .then((userExist) => {
        // returns promiss and checking if user exists.
        if (userExist) {
            return res.status(400).json({Error:"Email Already Exist"});
        }
        if (pwd != cpwd){
            return res.status(400).json({Error:"Password and Confirm Password are not same!"});
        } else{
            user.count().then((user_count) => {
                if(user_count == 0){
                    user_count = 1;
                }else{
                    user_count = user_count+1
                }
                if (type.toLowerCase() == "admin"){
                    user.count({type:type}).then((admin_count) =>{
                        const auto_reg = "ADM" + Number(admin_count+1);
                        const users = new user ({ user_id : user_count , name :name, gender:gender, dob:dob, email:email, reg_no:auto_reg, block:block, room:room, phone:phone, type:type, access:access, pwd:pwd, cpwd:cpwd }); // make new user which will fill all user schema fields.
                        //Saving data to mongodb (promise).
                        users.save().then(()=>{
                            res.status(200).json({Message: "User registered successfully...."});
                        }).catch((err) => {
                            console.log(err);
                            res.status(500).json({error: err.message});
                        })
                    })
                }
                else if (type.toLowerCase() == "staff"){
                    user.count({type:type}).then((staff_count) =>{
                        const auto_reg = "STA" + Number(staff_count+1);
                        const users = new user ({ user_id : user_count , name :name, gender:gender, dob:dob, email:email, reg_no:auto_reg, block:block, room:room, phone:phone, type:type, access:access, pwd:pwd, cpwd:cpwd }); // make new user which will fill all user schema fields.
                        //Saving data to mongodb (promise).
                        users.save().then(()=>{
                            res.status(200).json({Message: "User registered successfully...."});
                        }).catch((err) => {
                            res.status(500).json({error: err.message});
                        })
                    })
                }
                else if (type.toLowerCase() == "student"){
                    user.count({type:type}).then((student_count) =>{
                        const auto_reg = "STU" + Number(student_count+1);
                        const users = new user ({ user_id : user_count , name :name, gender:gender, dob:dob, email:email, reg_no:auto_reg, block:block, room:room, phone:phone, type:type, access:access, pwd:pwd, cpwd:cpwd }); // make new user which will fill all user schema fields.
                        //Saving data to mongodb (promise).
                        users.save().then(()=>{
                            res.status(200).json({Message: "User registered successfully...."});
                        }).catch((err) => {
                            res.status(500).json({error: err.message});
                        })
                    })
                }
                else{
                    const users = new user ({ user_id : user_count++ , name :name, gender:gender, dob:dob, email:email, reg_no:reg_no, block:block, room:room, phone:phone, type:type, access:access, pwd:pwd, cpwd:cpwd });
                    //Saving data to mongodb (promise).
                    users.save().then(()=>{
                        res.status(200).json({Message: "User registered successfully...."});
                    }).catch((err) => {
                        res.status(500).json({error: err.message});
                    })
                }
            }).catch((err) => {
                console.log(err);
            });        } 
    }).catch((err) => {
        console.log(err);
    });
});

// Login Validation 

router.post('/', cookieParser(), (req, res) => {
    const {email, pwd} = req.body;
    if (!email || !pwd){
        return res.status(400).json({error: "Fill in details properly.."});
    }

    // Not a very good aproach because people can access it throught simple conole.log(check)
    user.findOne({ email: email }).then((check) =>{

        if (check) {

            // comparing user hash password with the password enterd at the time of login.
            bcrypt.compare(pwd, check.pwd).then((pwd_check)=>{
                if(pwd_check){

                    // JWT (token generator) used here for redirecting user to their own given page.
                    // const token = jwt.sign({_id: check._id}, process.env.SECRET_KEY)
                    // user.updateMany({_id: check._id},{$set:{tokens: [...check.tokens, {token: token} ]}}).then().catch((err) => {
                    //     console.log(err);
                    // })
                    // console.log(token);
                    
                    // Cookie
                    // res.cookie('mycookies', token);
                    // console.log(`OUR COOKIE: ${req.cookies.mycookies}`);
                    
                    return res.json(check)
                         
                }
                else{
                    return res.status(400).json({message: "username/password is invalid!"})
                }
                
            })
        }
        else{
            return res.status(400).json({message: "username/password is invalid!"})
        }
    }).catch((err) => {
        console.log(err);

    })
});


module.exports = router;