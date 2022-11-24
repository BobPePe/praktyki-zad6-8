console.log("-----------");
console.log("-----------");
console.log("-----------");
console.log("-----------");
console.log("-----------");
console.log("-----------");


//zad 9
const promise = new Promise((resolve, reject) => {
    setTimeout(() => { //symulujemy ściąganie danych
        resolve("Śmiga");
    }, 5000);
});

promise.then(result => {
    //obietnica zakończyła się pozytywnie
    console.log(result)
});


//zad 10
const multiplyAsync = (x, y) => new Promise((resolve, reject) =>
{
	if (typeof x !== "number" || typeof y !== "number")
		return reject("nie jest liczba");
	resolve(x * y);
})
multiplyAsync(1, 3).then(console.log);
multiplyAsync(1, "123").then(console.log);
