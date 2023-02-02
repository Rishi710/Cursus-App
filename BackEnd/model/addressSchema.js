const mongoose =require('mongoose');

const addressSchema = new mongoose.Schema(
    {
         first:String,
         last:String ,
         academyname:String, 
         country:String,
         address1:String,
         address2:String,
         city:String,
         state:String,
         zip:Number,
         phone:Number,
    },
    {
        collection: "AddressInfo",
    }
)
mongoose.model('AddressInfo',addressSchema);

// mongoose.model.export =User;
  