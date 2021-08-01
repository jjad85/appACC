const fileSCVService = require('../services/filecsvService.js');
const S3Service = require('../services/S3Service.js');
const SESService = require('../services/SESService.js');
const ReqFieldException = require('../exceptions/ReqFieldException');

exports.processFileACC = async (req, res) => {
    console.log("Entro");
    if (!req.body.email) {
        throw new ReqFieldException('email');
    }
    let valEmail = SESService.ValidateMail(req.body.email);
    if (valEmail == true) {
        console.log("Validó OK el correo");
    }
    res.status(200).send("OK");
};