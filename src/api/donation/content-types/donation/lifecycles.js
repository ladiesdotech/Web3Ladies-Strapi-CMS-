module.exports = {
  afterCreate: async (event) => {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: result.company_email,
        toName: result.full_name,
        subject: "Thank you for your donation",
        text: "Thank you for reaching out to us, we appreciate your interest in supporting the work we do at Web3Ladies. Someone from our Sponsorship & Partnerships team will be in touch with you within the next 48hours.",
        html: `  
          <p>Hello ${result.full_name},</p>
          <br />
          <p>Thank you for reaching out to us, we appreciate your interest in supporting the work we do at Web3Ladies.</p>
          <p>Someone from our Sponsorship & Partnerships team will be in touch with you within the next 48hours.</p>
          <br />
          <p>Best regards,</p>
          <p>Sponsorship & Partnerships,</p>
          <p>Web3 Ladies.</p>
        `,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
