var areaOfCircle = function (r) {
	var area = getPiValue()*r*r;
	return area;
}

var getPiValue = function () {
	return 3.14;
}

console.log(areaOfCircle(5));


