const express = require('express');
const db = require('../../../models/index')
let router = express.Router();
var elasticClient = require('../../../elasticSearch.js');
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

  db.company.create(req.body)
  .then((created)=>{
    console.log("created:", created)
    elasticClient.create({
      index: 'saas',
      type: 'company',
      id: created.id,
      body: {
        name: created.name,
        id: created.id
      }
    });    
  })
  .catch((error)=>{
    //console.log("HHHHHHHHH:", error)
  })

});

router.get('/', async(req, res)=>{
  console.log("UUUUUUUU")
  const { order, orderBy, offset, rowsPerPage} = req.query
  try {
    const data = await db.company.findAll({
      order: [
          [orderBy, order],
      ],
      attributes: ['id', 'name', 'city', 'state', 'currentEmployeeNumber', 'exEmployeeNumber', 'leadInvestors', 'linkedin'],
      limit: parseInt(rowsPerPage),
      offset:parseInt(offset)
    })
    const totalCount = await db.company.count();
    res.json({totalCount, data})
  
  } catch (error) {
    //console.log("error: ", error)
  }
})
router.get('/:id', async(req, res)=>{
  //console.log("kkkkkkkkkk", req.params)
  const id = req.params.id
  db.company.findById(id)
  .then((result) => {
    res.json(result)
  })
})

router.get('/totalcount', (req, res) => {
  db.company.count()
  .then(result => res.send({totalCount: result}))
});

module.exports = router;