import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//     to: 'test@example.com',
//     from: 'test@example.com',
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };

//   sgMail.send(msg);

sgMail.getInitialProps = async function(context) {
  const url = 'localhost:3000/sendmail';
  const options = {
    method: "POST",
    text: 'Success!'
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return {
    products: data
  };
};

  export default sgMail;


// const nodemailer = require('nodemailer');
// const sgTransport = require('nodemailer-sendgrid-transport');

// const transporter = nodemailer.createTransport(sgTransport({
//   auth: {
//     api_key: process.env.SENDGRID_API_KEY,
//   },
// }));

// const send = ({ email, name, text }) => {
//   const from = name && email ? `${name} <${email}>` : `${name || email}`
//   const message = {
//     from,
//     to: 'kevin@thecouch.nyc',
//     subject: `New message from ${from}`,
//     text,
//     replyTo: from,
//   }

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(message, (error, info) =>
//       error ? reject(error) : resolve(info)
//     )
//   })
// }