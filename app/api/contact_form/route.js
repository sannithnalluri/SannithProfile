import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the incoming request body

        // Log the data (optional)
        console.log('Form data received:', body);

        // Configure Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Replace with your email service (e.g., 'gmail', 'outlook', etc.)
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASSWORD, // Your email password or app password
            },
        
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender email
            to: body.email, // Recipient email
            subject: 'FeedBack Form Submission',
            text: `Hello ${body.name},\n\nThank you for reaching out!\n\nWe have received your details:\nName: ${body.name}\nPhone: ${body.phone}\nOrganization Name: ${body.orginationName}\n\nWe will get back to you shortly.\n\nBest regards,\nSannit Nalluri`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ message: 'Form submitted and email sent successfully!' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error processing form submission:', error);

        return new Response(
            JSON.stringify({ error: 'Failed to process the form or send email.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
