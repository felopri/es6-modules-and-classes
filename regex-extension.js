let pattern = /\u{if3c4}/;
console.log(pattern.test('🏄'));
//false

let unicodePattern = /🏄/u;
console.log(unicodePattern.test('🏄'));
//true

const regex = /[💩-💫]/u
console.log(regex.test('💨'), // false
	regex.test('💩'), // true
	regex.test('💪'), // true
	regex.test('💫'), // true
	regex.test('💬')  // false
);