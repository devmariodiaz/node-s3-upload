const fs = require('fs');
const AWS = require("aws-sdk");
require('dotenv').config();

const s3 = new AWS.S3({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
})

const uploadFile = fileName => {
    fs.readFile(fileName, (err, data) => {
        if(err) throw err;

        const s3Params = {
            Bucket: process.env.BUCKET_NAME,
            Key: 'myFile.png',
            Body: JSON.stringify(data, null, 2)
        };

        s3.upload(s3Params, (s3Err, result) => {
            if(s3Err) throw s3Err;

            console.log(result);
            console.log(`File uploated successfully at ${result.Location}`);
        })
    });
}

uploadFile('img.png');