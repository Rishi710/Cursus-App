const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
   res.send('Hello world from the server router js');
});

router.post('/cardpay', (req, res) => {
    console.log(req.body);
    // res.send("mera register Page");
    res.json({message:req.body});
})
module.exports = router;