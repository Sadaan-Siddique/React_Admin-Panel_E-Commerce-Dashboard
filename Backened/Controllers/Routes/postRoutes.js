// Requries
const express = require('express');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const userSchema = require('../../Models/UserSchema');
const productSchema = require('../../Models/ProductSchema');
const cors = require('cors');
require('dotenv').config();

// Execution
const post_route = express();
const userModel = userSchema.userModel;
const productModel = productSchema.productModel;
const secret_Key = process.env.SECRET_KEY;

// Middle Wares
post_route.use(cors());
post_route.use(express.urlencoded({ extended: false }));

// Routes

post_route.post('/signup', async (req, res) => {
    try {
        if (req.body.username && req.body.email && req.body.password) {
            // Check if the email is valid and contains "@gmail.com"
            if (!req.body.email.match(/\S+@gmail\.com/)) {
                return res.status(400).send("Invalid Email Format !");
            }
            // Check if the password length is at least 6 characters
            if (req.body.password.length < 6) {
                return res.status(401).send("Password must be at least 6 characters long.");
            }
            // Now, Finding a user from Database
            const output = await userModel.findOne({ email: req.body.email });
            console.log(output);
            if (output !== null) {
                res.status(409).send('Email already Exists !');
            } else {
                // Setting Created Date of User Account
                const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
                const currentDate = new Date().toLocaleString('en-US', options).replace(/, /g, '-');
                // Creating User
                const newUser = new userModel({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    createdOn: currentDate,
                })
                const saveOutput = await newUser.save();
                // Creating Token
                const token = jwt.sign({
                    email: saveOutput.email,
                    password: saveOutput,
                    id: saveOutput._id,
                    role: saveOutput.role
                }, secret_Key)
                // Response
                res.status(200).json({
                    msg: "You have Signed up Successfully.",
                    token,
                    saveOutput
                });
            }
        } else {
            res.status(404).send('Data Not Recieved !');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }

})

post_route.post('/signin', async (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            const userOutput = await userModel.findOne({ email: req.body.email });
            console.log(userOutput);
            if (userOutput) {
                if (userOutput.password === req.body.password) {
                    // Creating Token
                    const token = jwt.sign({
                        email: userOutput.email,
                        password: userOutput.password,
                        id: userOutput._id,
                        role: userOutput.role
                    }, secret_Key)
                    // Response
                    res.status(200).json({
                        msg: 'You have Signed In Successfully',
                        token,
                        userOutput
                    })
                } else {
                    res.status(401).json("Incorrect Password !");
                }
            } else {
                res.status(404).send('User Not Found !');
            }
        } else {
            res.status(404).send('Data Not Recieved');
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
    // if (!output ||!bcrypt.compareSync(req.body.password, output.password)) {}
    // let token = jwt.sign({id : output._id},process.env.JWT_KEY,{expiresIn:'3h'})
})

// Multer
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./Controllers/product_images");
        },
        filename: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname + "-" + Date.now() + ".jpg");
            // cb(null, file.originalname);
        }
    })
}).single("product_images");

// Product Images   
post_route.post('/productImages', upload, async (req, res) => {
    try {
        if (req.file) {
            if (
                !req.body.productName ||
                !req.body.status ||
                !req.body.salesPrice ||
                !req.body.costPrice ||
                !req.body.quantity ||
                !req.body.productDescription
            ) {
                res.status(404).send('Data Not Recieved');
            } else if (
                // If is Not a Number or cannot be converted to a number, it will return true otherwise false.
                isNaN(req.body.costPrice) ||
                isNaN(req.body.salesPrice) ||
                isNaN(req.body.quantity)
            ) {
                res.status(400).send('Invalid Data Type !');
            } else {
                console.log(req.file);

                // Because due to fromData all the values are coming with String Data Type.
                const costPrice = parseInt(req.body.costPrice);
                const salesPrice = parseInt(req.body.salesPrice);
                const quantity = parseInt(req.body.quantity);
                req.body.costPrice = costPrice;
                req.body.salesPrice = salesPrice;
                req.body.quantity = quantity;

                // Creating Date on Which the Product is added.
                const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
                const currentDate = new Date().toLocaleString('en-US', options).replace(/, /g, '-');

                const newProduct = new productModel({
                    imageOriginalName: req.file.originalname,
                    imageUrl: req.file.path,
                    imageFileName:req.file.filename,
                    addedOn: currentDate,
                    ...req.body,
                })
                console.log(newProduct);
                const saveOutput = await newProduct.save();

                console.log(saveOutput);
                res.status(200).json({ msg: 'Product have been Created', saveOutput });
            }
        } else {
            res.status(404).send('Image Not Received');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});




// Export
module.exports = post_route;