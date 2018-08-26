// DUMMY PROMISE

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Bruce',
            alterego: 'Batman'
        });
        // reject('oops, something went wrong, my dude');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is another promise');
        }, 5000);
    });
}).then((str) => {
    console.log('does this run?', str)
}).catch((error) => {
    console.log('error:', error);
});

console.log('after');
