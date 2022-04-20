const functions = require("firebase-functions");


// trying out some tutorial's functions
exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() *100);
    console.log(number);
    response.send(number.toString());
});

//firestore trigger for tracking activity
exports.logActivities = functions.firestore.document('/{games}/{id}')
    .onCreate((snap, context) => {
        //laksjdföaklj
        console.log(snap.data());
        const games = context.params.game;
        const id = context.params.id;

        const activities = admin.firestore.collection('activities');

        if (games === 'games'){
            return activities.add({text: 'NEW GAME WAS MADE'});

        }
        return null;
    })