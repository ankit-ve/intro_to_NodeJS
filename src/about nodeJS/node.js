// -------------------------------
// below code explains Non-Blocking I/O 
const printHello = () => {
    console.log("Hello");
}

console.log("printing finished");

setTimeout(printHello, 2000);
// ---------------------------------

// console.log(__dirname)