import { text } from "express";
import Mailgen from "mailgen";
import nodemailer from "nodemailer";

//for sending emails this is all we require...

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "http://taskmanagelink.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@gmail.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed !! Make sure that you have provided your MAILTRAP Credentials in the .env file",
    );

    console.error("Error: ", error);
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App ! we are excited to have you with us.",
      action: {
        instruction:
          "To verify your email please click on the following button",
        button: {
          color: "#7C3AED",
          text: "Verify your email",
          link: verificationUrl,
        },
      },

      outro:
        "Need help,or have Question? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "We got the request to reset the password of your account.",
      action: {
        instruction:
          "To reset your password please click on the following button or link",
        button: {
          color: "#22C55E",
          text: "Verify your email",
          link: verificationUrl,
        },
      },

      outro:
        "Need help,or have Question? Just reply to this email, we'd love to help.",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
