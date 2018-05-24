/**
 * How to use
 *
 * node import.js {./firebase-key.json} {https://your-firebase.firebaseio.com}
 */
const params = process.argv;
const firestoreService = require('firestore-export-import');
const fs = require('fs')
const serviceAccount = require(params[2]);

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount, params[3]);

// Start exporting your data
const files = fs.readdirSync('./collections')
files.forEach(file => {
    firestoreService.restore(`./collections/${file}`);
})
