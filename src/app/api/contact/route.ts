import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function sendEmail({
    to,
    replyTo,
    subject,
    text,
    html,
}: {
    to: string;          // Your email (recipient)
    replyTo: string;     // User's email (for reply-to)
    subject: string;
    text: string;
    html: string;
}) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,  // Your Gmail
            pass: process.env.EMAIL_PASSWORD   // Your Gmail app password
        },
    });

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USERNAME}>`,  // Sent from your email
            to: to,                    // Your email as recipient
            replyTo: replyTo,           // User's email for replies
            subject: subject,
            text: text,
            html: html,
        });
    } catch (error: any) {
        throw new Error(error?.message);
    }
}

export async function POST(request: Request) {
    try {
        const { name, email, message, title } = await request.json();

        await sendEmail({
            to: 'mail4suraj11@gmail.com',      // Your email address
            replyTo: email,                   // User's email address
            subject: `New Message: ${title}`,
            text: message,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Subject:</strong> ${title}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}