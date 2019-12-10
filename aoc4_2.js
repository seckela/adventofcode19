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
	let numStr = String(number).split('');
	for(let i = 1; i < numStr.length; i++){
		let dupeCount = numStr.filter((num, j) => num === numStr[i] && (numStr[j] === numStr[j-1] ||   numStr[j] === numStr[j+1])).length;
		if(numStr[i] < numStr[i-1]){
			break;
		} else if(i+1 === numStr.length){
			increaseCheck = true;
		}

		if(dupeCount > 1){
			if(dupeCount === 2){
				dupeCheck = true;
			}	
		}
	}
	if(increaseCheck && dupeCheck){
		return true;
	} else {
		return false;
	}

}

answer = seek(min, max);