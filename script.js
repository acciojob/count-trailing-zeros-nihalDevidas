function trailingZeros(n) {
  //your JS code here. If required.

	let zeros = 0;

	let powOf5 = 5;

	while(Math.floor(n/powOf5)>0){
		zeros = zeros + Math.floor(n/powOf5)
		powOf5 = powOf5*5;
	}
	return zeros;
}

const input = prompt("Enter a number");
alert(trailingZeros(input))
