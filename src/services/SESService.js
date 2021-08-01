const aws = require('aws-sdk');
const { config } = require('dotenv');

aws.config.update({ 
    region: 'us-east-1'
});

const ses = new aws.SES({
    apiVersion: '2010-12-01', 
    accessKeyId: config.AWSID, 
    secretAccessKey: config.AWSSECRET 
});

exports.ValidateMail = async (email) => {
    console.log("Entro al validar correo");
    var params = {};
    const listEmail = await ses.listVerifiedEmailAddresses(params).promise();
    const listEmailText = listEmail.VerifiedEmailAddresses.toString().split(",");
    let respValEmail = false;
    for (var i=0; i<listEmailText.length; i++) {
        if (listEmailText[i] == email){
            respValEmail = true;
        }
    }
    return respValEmail;
}; 