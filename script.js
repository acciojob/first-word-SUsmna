// function firstWord(s) {
//   // your code here
// 	if (!s || s.trim() === ""){
// 		return s;
// 	}
// 	const spaceIndex = s.indexOf(' ');

// 	if(spaceIndex === -1){
// 		return s;
// 	}
// 	return s.substring(0,spaceIndex);
// }
// console.log(firstWord('see and stop'));
// console.log(firstWord('Hello World!'));
// console.log(firstWord('12345'));
// // Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
function firstWord(str) {
    // If the string is empty or doesn't contain any space, return the entire string
    if (!str || str.indexOf(' ') === -1) {
        return str;
    }
    // Extract the first word by finding the index of the first space
    return str.substring(0, str.indexOf(' '));
}