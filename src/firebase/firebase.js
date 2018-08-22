import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDoET1g2b4zdi7ZyCzwa2WDlw1Ml7X_F6k",
    authDomain: "xpend-app.firebaseapp.com",
    databaseURL: "https://xpend-app.firebaseio.com",
    projectId: "xpend-app",
    storageBucket: "xpend-app.appspot.com",
    messagingSenderId: "444806981623"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Bruce Wayne',
    alterEgo: 'The Batman',
    hasPowers: false,
    location: {
        city: 'Gotham',
        country: 'United States'
    }
});

// database.ref().set('this is my data!');

database.ref('name').set('Unknown');
// database.ref('location/city').set('Metropolis')

database.ref('appearence').set({
    height: '6ft 2in',
    weight: '210lbs',
    costume: 'Black and grey suit with a bat symbol on the chest and a cape. Cowl with pointed ears on top.' 
});

console.log('requested data change')