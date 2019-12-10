let min = 240920;
let max = 789857;
let valid = [];
function seek(min, max){
	for(let i = min; i <= max; i++){
		if(testValid(i)){
			valid.push(i);
		};
	}
	return valid.length;
}
function testValid(number){
	let increaseCheck = false;
	let dupeCheck = false;
	let numStr = String(number);
	for(let i = 1; i < numStr.length; i++){
		if(numStr.charAt(i) < numStr.charAt(i-1)){
			break;
		} else if(i+1 === numStr.length){
			increaseCheck = true;
		}

		if(numStr.charAt(i) === numStr.charAt(i-1)){
			dupeCheck = true;
		}
	}
	if(increaseCheck && dupeCheck){
		return true;
	} else {
		return false;
	}

}

answer = seek(min, max);
