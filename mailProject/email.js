const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
	service:"mailtrap",
	port: 2525,               
	auth: {
    user: '6b86330e67788e',
    pass: 'b3d5792c1c7690',
	},
	secure: false,
});

module.exports = transporter;