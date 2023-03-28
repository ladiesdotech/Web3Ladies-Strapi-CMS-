module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "a734d032d3673e5876175495e4fe5a3e"),
  },
  apiToken: { salt: env("API_TOKEN_SALT") },
});
