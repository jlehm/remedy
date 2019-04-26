const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

exports.setData = (documentName, documentObject) => {
  db.collection('users').doc("test document").set({ "testdata": "testdata" })
}