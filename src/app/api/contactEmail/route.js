import nodemailer from "nodemailer";

// Create a reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper function to sanitize input
const sanitizeInput = (input) => {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// Handle POST request
export async function POST(req) {
  try {
    const { name, email, message, phone } = await req.json();

    // Input validation
    if (!name || !email || !message || !phone) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedPhone = sanitizeInput(phone);

    // Email content
    const mailOptions = {
      from: `"${sanitizedName}" <${sanitizedEmail}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `ENQUIRY from ${sanitizedName} | CDSNOWRA.COM`,
      text: `
        Name: ${sanitizedName}
        Email: ${sanitizedEmail}
        Phone: ${sanitizedPhone}
        Message: ${sanitizedMessage}
      `,
      html: `
        ${getHeader()}
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #2d3748; font-size: 24px; font-weight: bold;">Contact Form Submission</h2>
            
            <div style="font-size: 18px; font-weight: bold; background-color: #d4f4f0; padding: 10px; text-align: center; margin-bottom: 10px;">
              Personal Details
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="font-size: 16px; font-weight: bold; color: #333;">Name</p>
              <p style="padding: 10px; background-color: #f0f9f4; font-size: 14px;">${sanitizedName}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="font-size: 16px; font-weight: bold; color: #333;">Email</p>
              <p style="padding: 10px; background-color: #f0f9f4; font-size: 14px;">${sanitizedEmail}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="font-size: 16px; font-weight: bold; color: #333;">Phone</p>
              <p style="padding: 10px; background-color: #f0f9f4; font-size: 14px;">${sanitizedPhone}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="font-size: 16px; font-weight: bold; color: #333;">Message</p>
              <p style="padding: 10px; background-color: #f0f9f4; font-size: 14px;">${sanitizedMessage}</p>
            </div>

          </div>
        </div>
        ${getFooter()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

function getHeader() {
  return `
    <div style="background-color: #2d3748; color: white; padding: 16px; text-align: center;">
      This Data is Secure and Encrypted with SSL/TLS Encryption maintained by <a href="https://binayakpokharel.com.np" target="_blank" rel="noopener noreferrer" style="color: #ffffff; text-decoration: none;">
        <span style="color: #FFD700; text-decoration:underline;">LaveshTech</span>
      </a>.
    </div>
  `;
}

function getFooter() {
  return `
    <div style="background-color: #2d3748; color: white; padding: 16px; font-size: 16px; text-align: center;">
      <div>
        &copy; ${new Date().getFullYear()} Design by <a href="https://binayakpokharel.com.np" target="_blank" rel="noopener noreferrer" style="color: #ffffff; text-decoration: none;">
          <span style="color: #FFD700; text-decoration:underline;">LaveshTech</span>
        </a>, All Rights Reserved.
      </div>
    </div>
    <div style="background-color: purple; color: white; padding: 5px; text-align: center;">
      <span style="font-size: 17px; color: #ffffff; font-weight: bold;">
        Contact us to build your dream project - quick, secure, and affordable!
      </span>
      <div style="text-align: center; padding: 17px;">
        <a href="https://binayakpokharel.com.np" target="_blank" rel="noopener noreferrer" 
          style="display: inline-block; background-color: #FFD700; color: #333; padding: 10px 20px; font-size: 15px; font-weight: bold; border-radius: 5px; text-decoration: none; animation: blink 1s infinite;">
          CONTACT US
        </a>
      </div>
    </div>
  `;
}