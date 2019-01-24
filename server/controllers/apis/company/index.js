const express = require('express');
const db = require('../../../models/index')
let router = express.Router();

router.post('/', (req, res, next)=>{

    
    req.body.currentEmployeeNumber = 12333
    console.log("req:", req.body)
    db.company.create(req.body).then(()=>{res.send("Happy")})
    .catch((error)=>{
      console.log("HHHHHHHHH:", error)
    })

});

//router.get('/:id', dogService.getDogWithId);

module.exports = router;