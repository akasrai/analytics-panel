import nodemailer from 'nodemailer';

const smptTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '',
    pass: '',
  },
});

export default smptTransport;
