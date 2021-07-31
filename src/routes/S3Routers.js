const contS3 = require('../controllers/S3Controller.js');

module.exports = (router) => {
    router.route('/fileACC/').post(contS3.processFileACC);
};