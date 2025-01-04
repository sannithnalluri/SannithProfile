import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the incoming request body

        // Log the data (optional)
        console.log('Form data received:', body);
        const transporter = nodemailer.createTransport({
                    service: 'gmail', // Replace with your email service (e.g., 'gmail', 'outlook', etc.)
                    auth: {
                        user: process.env.EMAIL_USER, // Your email address
                        pass: process.env.EMAIL_PASSWORD, // Your email password or app password
                    },
                
                });


                const mailOptions = {
                    from: process.env.EMAIL_USER, // Sender email
                    to:"sannithnalluri@gmail.com", // Recipient email
                    subject: 'Contact Form Submission',
                    text: body.message
                }
        
                // Send email
                await transporter.sendMail(mailOptions);
        
                return new Response(
                    JSON.stringify({ message: 'Form submitted and email sent successfully!' }),
                    { status: 200, headers: { 'Content-Type': 'application/json' } }
                );
        

        return new Response ("success")
    }
    catch (error) {
        console.error('Error parsing JSON:', error);
        return res.status(400).json({ error: 'Invalid JSON format' });
    }
}