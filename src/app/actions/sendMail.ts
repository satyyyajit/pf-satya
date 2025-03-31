"use server";

import nodemailer from "nodemailer";

export const sendEmail = async (prevState: { success: boolean; message: string } | null, formData: FormData) => {
    const name = formData.get("name")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !message) {
        return { success: false, message: "All fields are required" };
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p>${message}</p>`,
        });

        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: error instanceof Error ? error.message : "Failed to send email" };
    }
}
