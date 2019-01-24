const
    express = require('express'),
    companyController = require('../../controllers/apis/company');

let router = express.Router();

router.use('/companies', companyController);

module.exports = router;