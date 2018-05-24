/**
 * How to use
 *
 * node export.js {./firebase-key.json} {https://your-firebase.firebaseio.com} collection1,collection2
 */
const params = process.argv;
const firestoreService = require('firestore-export-import');
const fs = require('fs');
const serviceAccount = require(params[2]);

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount, params[3]);

const collections = params[4].split(',')

// Start exporting your data
collections.forEach(collection => {
  let result = firestoreService.backup(collection);
  result.then(data => {
    fs.writeFileSync(`./collections/${collection}.json`, JSON.stringify(data))
  })
})
