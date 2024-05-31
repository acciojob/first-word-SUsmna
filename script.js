function firstWord(s) {
  // your code here
	if (!s || s.trim() === ""){
		return s;
	}
	const spaceIndex = s.indexOf(' ');

	if(spaceIndex === -1){
		return s;
	}
	return s.substring(0,spaceIndex);
}
console.log(firstWord('see and stop'));
console.log(firstWord('Hello World!'));
console.log(firstWord('12345'));
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
