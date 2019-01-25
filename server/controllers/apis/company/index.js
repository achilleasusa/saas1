const express = require('express');
const db = require('../../../models/index')
let router = express.Router();
//var elasticClient = require('./elasticSearch.js');

// client.search({
//   index: 'twitter',
//   type: 'tweets',
//   body: {
//     query: {
//       match: {
//         body: 'elasticsearch'
//       }
//     }
//   }
// }).then(function (resp) {
//     var hits = resp.hits.hits;
// }, function (err) {
//     console.trace(err.message);
// });

router.post('/', (req, res, next)=>{

  // db.company.create(req.body)
  // .then((created)=>{
  //   client.create({
  //     index: 'saas_company',
  //     type: 'company',
  //     id: created._id,
  //     body: {
  //       name: created.name,
  //     }
  //   });    
  //   client.index({
  //     ///
  //   })
  // })
  // .catch((error)=>{
  //   console.log("HHHHHHHHH:", error)
  // })

});

//router.get('/:id', dogService.getDogWithId);

module.exports = router;