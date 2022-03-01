module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f909092ba8fb940c18e3918cee31e29'),
  },
});
