let title = 'Madrid \u{1f3c4} Rio';
console.log(title.startsWith('Madrid'));
//true
console.log(title.endsWith('Rio'));
//false

console.log(title);
//Madrid 🏄 Rio

let surfer = "\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(surfer.length);
//6
console.log(Array.from(surfer).length);
//3
console.log(surfer);
//🌊🏄🐋

let otherTitle = 'Surfer';
let output = String.raw`${otherTitle} \u{1f3c4}\n`;
console.log(output);
//Surfer \u{1f3c4}\n

