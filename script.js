function firstWord(s) {
    if (s === '' || !s.includes(' ')) {
        return s;
    } else {
        return s.substring(0, s.indexOf(' '));
    }
}

console.log(firstWord('see and stop')); // Output: 'see'
console.log(firstWord(' Hello World!')); // Output: 'Hello'
console.log(firstWord('12345')); // Output: '12345'
console.log(firstWord('')); // Output: ''

const s = prompt("Enter String:");
alert(firstWord(s));