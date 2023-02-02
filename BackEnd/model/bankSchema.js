const mongoose =require('mongoose');

const bankSchema = new mongoose.Schema(
    {
        account_holdername:String,
        Account_number:Number,
        Bank_name:String,
        code:String
    },
    {
        collection: "BankInfo",
    }
)
 mongoose.model('BankInfo',bankSchema);


  