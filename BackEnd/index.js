const express  =require ('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());

dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
const PORT = process.env.PORT;

// Address Sechema
require('./model/addressSchema');
const Address = mongoose.model("AddressInfo"); 
app.post('/checkout_membership/edit-address', async(req,res) => {
    const { first, last, academyname, country, address1, address2, city, state, zip, phone} = req.body;
    try {
        await Address.create({
            first,
            last,
            academyname, 
            country,
            address1,
            address2,
            city,
            state,
            zip,
            phone,
        }),
        res.send({status: "ok"})
    } catch (error) {
        res.send({status: "error"})
    }
});

// Card Schema
require('./model/cardSchema');

const Card = mongoose.model("CardInfo"); 
app.post('/checkout_membership/card-payment', async(req,res) => {
    const { holdername, cardnumber, expire_year, expire_month, cvv } = req.body;
    try {
        await Card.create({
            holdername,
            cardnumber,
            expire_year,
            expire_month,
            cvv,
        }),
        res.send({status: "ok"})
    } catch (error) {
        res.send({status: "error"})
    }
});

// Bank Schema
require('./model/bankSchema');

const Bank = mongoose.model("BankInfo"); 
app.post('/checkout_membership/bank-transfer', async(req,res) => {
    const { account_holdername, Account_number, Bank_name, code } = req.body;
    try {
        await Bank.create({
            account_holdername,
            Account_number,
            Bank_name,
            code 
        }),
        res.send({status: "ok"})
    } catch (error) {
        res.send({status: "error"})
    }
});
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})