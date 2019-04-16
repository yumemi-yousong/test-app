const functions = require('firebase-functions');
const db = require('../firebase').db;

exports.setData = functions.region('asia-northeast1').https.onCall(async (data, context) => {
  if(true){
   console.dir(data);
   const docRef = db.collection('user').doc('hogehogemax');
   await docRef.set(data);
  }
});