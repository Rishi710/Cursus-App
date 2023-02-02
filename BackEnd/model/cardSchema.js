const mongoose =require('mongoose');

const cardSchema = new mongoose.Schema(
    
    {
        holdername: String,
        cardnumber: Number,
        expire_year: Number,
        expire_month: Number,
        cvv: Number,
        account_holdername:String,
        Account_number:Number,
        Bank_name:String,
        code:String
    },
    {
        collection: "CardInfo",
    }
)
mongoose.model('CardInfo',cardSchema);

// mongoose.model.export =User;
  