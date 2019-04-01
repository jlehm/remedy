"use strict";
var functions = require('firebase-functions');
var admin = require('firebase-admin');
var firebaseHelper = require('firebase-functions-helper');
var express = require('express');
var bodyParser = require('body-parser');

const { validateFirebaseIdToken } = require('./validateFirebaseIdToken.js');

admin.initializeApp(functions.config().firebase);
var db = admin.firestore();
var app = express();
var main = express();
var contactsCollection = 'contacts';

// middleware
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({
  extended: false
})); 

// webApi is your functions name, and you will pass main as 
// a parameter
exports.webApi = functions.https.onRequest(main); 

// Add new contact
// {
//   "credentials": {
//     "name": "Jordan",
//     "number": "12345"
//   },
// }

app.post('/contacts', function (req, res) {
  firebaseHelper.firestore.createNewDocument(db, contactsCollection, req.body);
  res.send('Create a new contact');
}); 

// Update new contact
app.patch('/contacts/:contactId', function (req, res) {
  firebaseHelper.firestore.updateDocument(db, contactsCollection, req.params.contactId, req.body);
  res.send('Update a new contact');
}); 

// View a contact
app.get('/contacts/:contactId', function (req, res) {
  firebaseHelper.firestore.getDocument(db, contactsCollection, req.params.contactId).then(function (doc) {
    return res.status(200).send(doc);
  });
}); 

// View all contacts
app.get('/contacts', function (req, res) {
  firebaseHelper.firestore.backup(db, contactsCollection).then(function (data) {
    return res.status(200).send(data);
  });
}); 

// Delete a contact 
app.delete('/contacts/:contactId', function (req, res) {
  firebaseHelper.firestore.deleteDocument(db, contactsCollection, req.params.contactId);
  res.send('Document deleted');
});