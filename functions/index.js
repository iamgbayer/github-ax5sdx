const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.groups = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
