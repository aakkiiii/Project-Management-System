import Mailgen from "mailgen";

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

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
