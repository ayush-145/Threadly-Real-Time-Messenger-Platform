import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplate.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    try {
        const { data, error } = await resendClient.emails.send({
            from: `${sender.name} <${sender.email}>`,
            to: email,
            subject: "Welcome to Threadly",
            html: createWelcomeEmailTemplate(name, clientURL),
        });
        console.log("Welcome email sent successfully:", data);
    } catch (error) {
        console.error("Error sending welcome email:", error);
        throw error;
    }
};