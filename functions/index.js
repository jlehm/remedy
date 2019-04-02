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

var accountsCollection = 'accounts';
var contractsCollection = 'contracts';
var ownersCollection = 'owners';

// middleware
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({
  extended: false
})); 

// webApi is your functions name, and you will pass main as 
// a parameter
exports.webApi = functions.https.onRequest(main); 

// Accounts API
// Create a new account
app.post('/accounts', function (req, res) {
  firebaseHelper.firestore.createNewDocument(db, accountsCollection, req.body);
  res.send('Create a new account');
});

// Update new account
app.patch('/accounts/:accountId', function (req, res) {
  firebaseHelper.firestore.updateDocument(db, accountsCollection, req.params.accountId, req.body);
  res.send('Update a new account');
}); 

// View an account
app.get('/accounts/:accountId', function (req, res) {
  firebaseHelper.firestore.getDocument(db, accountsCollection, req.params.accountId).then(function (doc) {
    return res.status(200).send(doc);
  });
}); 

// View all accounts
app.get('/accounts', function (req, res) {
  firebaseHelper.firestore.backup(db, accountsCollection).then(function (data) {
    return res.status(200).send(data);
  });
}); 

// Delete an account 
app.delete('/accounts/:accountId', function (req, res) {
  firebaseHelper.firestore.deleteDocument(db, accountsCollection, req.params.accountId);
  res.send('Document deleted');
});

// Contracts API
// Add new contract
app.post('/contracts', function (req, res) {
  firebaseHelper.firestore.createNewDocument(db, contractsCollection, req.body);
  res.send('Create a new contract');
}); 

// Update new contract
app.patch('/contracts/:contractId', function (req, res) {
  firebaseHelper.firestore.updateDocument(db, contractsCollection, req.params.contractId, req.body);
  res.send('Update a new contract');
}); 

// View a contract
app.get('/contracts/:contractId', function (req, res) {
  firebaseHelper.firestore.getDocument(db, contractsCollection, req.params.contractId).then(function (doc) {
    return res.status(200).send(doc);
  });
}); 

// View all contracts
app.get('/contracts', function (req, res) {
  firebaseHelper.firestore.backup(db, contractsCollection).then(function (data) {
    return res.status(200).send(data);
  });
}); 

// Delete a contract 
app.delete('/contracts/:contractId', function (req, res) {
  firebaseHelper.firestore.deleteDocument(db, contractsCollection, req.params.contractId);
  res.send('Document deleted');
});

// Owners API
// Add new owner
app.post('/owners', function (req, res) {
  firebaseHelper.firestore.createNewDocument(db, ownersCollection, req.body);
  res.send('Create a new owner');
}); 

// Update new owner
app.patch('/owners/:ownerId', function (req, res) {
  firebaseHelper.firestore.updateDocument(db, ownersCollection, req.params.ownerId, req.body);
  res.send('Update a new owner');
}); 

// View an owner
app.get('/owners/:ownerId', function (req, res) {
  firebaseHelper.firestore.getDocument(db, ownersCollection, req.params.ownerId).then(function (doc) {
    return res.status(200).send(doc);
  });
}); 

// View all owners
app.get('/owners', function (req, res) {
  firebaseHelper.firestore.backup(db, ownersCollection).then(function (data) {
    return res.status(200).send(data);
  });
}); 

// Delete an owner 
app.delete('/owners/:ownerId', function (req, res) {
  firebaseHelper.firestore.deleteDocument(db, ownersCollection, req.params.ownerId);
  res.send('Document deleted');
});
