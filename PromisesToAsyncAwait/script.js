function myPromise() {
    return new Promise(resolve => {
        setTimeout(() => resolve('resolved'), 5000);
    })

}

myPromise().then(v => console.log(v));

async function getValue() {
    const v = await myPromise();
    console.log(v);
}