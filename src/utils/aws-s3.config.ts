import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: process.env.REACT_APP_S3_ID,
    secretAccessKey: process.env.REACT_APP_S3_KEY,
    region: process.env.REACT_APP_S3_REGION
});

export const S3 = new AWS.S3();