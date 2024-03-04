// require("dotenv").config();
const nodemailer = require('nodemailer');



const smtpConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'sanidhyasahu194@gmail.com',
        pass: 'ixuy cmez pxeo lkyc'
    },
};

const transporter = nodemailer.createTransport(smtpConfig);

const sendComplainEmail = async (complainId, wardenEmail,supervisorEmail, studentName, regid, complainDesc,block,status) => {
    let message = {
        from: 'sanidhyasahu194@gmail.com',
        to: wardenEmail,
        cc:supervisorEmail,
        subject: `Complain regarding ${block}`,
        text:`Respected Warden,\n\n ${studentName}, ${regid} has an complain reagrding ${block}.\n\nComplain : ${complainDesc}.\nComplain ID : ${complainId}.\nComplain Status : ${status} 
            `
        
    };

    transporter.sendMail(message)
        .then(() => {
            return console.log({ msg: 'Email sent' })
        })
        .catch(error => {
            return console.log({ error })
        });
}
sendComplainEmail("complain_ID","aneesahu4@gmail.com","sanidhyasahu2022@vitbhopal.ac.in","Sanidhya sahu","22BAI10234","no water in block 1","Boys Hostel Block 1","raised")

module.exports = {sendComplainEmail};