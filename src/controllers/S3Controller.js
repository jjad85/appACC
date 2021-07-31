const S3Service = require('../services/S3Service.js');
const ReqFieldException = require('../exceptions/ReqFieldException');

exports.processFileACC = async (req, res) => {
    console.log("Entro");
    if (!req.body.email) {
        throw new ReqFieldException('email');
    }
    res.status(200).send("OK");
};