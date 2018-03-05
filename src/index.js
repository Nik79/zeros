module.exports = function getZerosCount(number) {
  // your implementation
var zerosNum = 0;
var degree = 1;
var div = number/Math.pow(5,1);

while (div>1) {
	var flooredDiv = Math.floor(div);
	zerosNum = zerosNum + flooredDiv;
	degree = degree + 1;
	div = number/Math.pow(5,degree);
}

return zerosNum;

}
