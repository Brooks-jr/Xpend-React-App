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

export { firebase, database as default };







// // listen for when a child is removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // listen for when a child is changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // listen for when a child is added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'gas bill',
//     note: '',
//     amount: 30000,
//     createdAt: 2114415 
// });

// database.ref('notes/-LKd-5sonm47Uytvf9Uv').remove();

// database.ref('notes').push({
//     title: 'firebase lesson',
//     body: 'handling list based data'
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.alterEgo} is a vigilante in ${val.location.city} that wears ${val.appearence.costume}`)
// });

// ================
//      READ
// ================
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log('Error: our engines are failing!', error);
// });

// setTimeout(() => {
//     database.ref('appearence/weight').set('197lbs');
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('appearence/weight').set('200lbs');
// }, 10500);

// database.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((error) => {
//     console.log('Error: our engines are failing!', error);
// });

// ================
//      CREATE
// ================
// database.ref().set({
//     name: 'Bruce Wayne',
//     alterEgo: 'The Batman',
//     hasPowers: false,
//     killsPeople: false,
//     location: {
//         city: 'Gotham',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data has been stored');
// }).catch((e) => {
//     console.log('our engines are failing!', e);
// });

// database.ref().set('dummy data here!');

// database.ref('name').set('Unknown');
// database.ref('location/city').set('Metropolis')

// database.ref('appearence').set({
//     height: '6ft 2in',
//     weight: '210lbs',
//     costume: 'Black and grey suit with a bat symbol on the chest and a cape. Cowl with pointed ears on top.'
// }).then(() => {
//     console.log('second set of data stored');
// }).catch((e) => {
//     console.log('our engines are failing!', e);
// });

// ================
//     UPDATE
// ================
// database.ref().update({
//     name: 'Tim Drake',
//     alterEgo: 'Future Batman',
//     killsPeople: true,
//     'location/city': 'bludhaven'
// });

// ================
//     DELETE
// ================
// database.ref('name').set(null);
// database.ref('name').remove()
//     .then(() => {
//         console.log('data has been removed');
//     }).catch((e) => {
//         console.log('our engines are failing!', e);
//     });

// console.log('requested data change!')