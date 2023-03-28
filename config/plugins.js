module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    provider: "strapi-provider-email-mailjet",
    providerOptions: {
      publicApiKey: env("MAILJET_PUBLIC_KEY"),
      secretApiKey: env("MAILJET_SECRET_KEY"),
    },
    settings: {
      defaultFrom: "sponsorship.partnership@web3ladies.com",
      defaultFromName: "Sponsorship & Partnerships at Web3Ladies",
      defaultTo: "echenimjennifer@gmail.com",
      defaultToName: "Jennifer Echenim",
    },
  },
});
