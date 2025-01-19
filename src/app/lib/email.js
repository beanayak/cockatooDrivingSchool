import nodemailer from 'nodemailer';

export const sendEmail = async ({ to, subject, text }) => {
  try {
    // Create a transporter using the email configuration from .env
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_PORT === '465', // Use SSL for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address
      to, // Recipient address (dynamic)
      subject, // Subject line
      text, // Plain text body
    });

    console.log('Message sent: %s', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false };
  }
};
