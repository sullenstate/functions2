$(document).on('ready', function() {


});

var getName = function(profile){
	return profile.name
};

console.log(getName({ name: 'Luisa', age: 25 }));

// >>>>>>>> Number 2 <<<<<<<<
var totalLetters = function(array){
	var j = 0;
	for ( i = 0; i < array.length; i++) {
		j += array[i].length;
	}
	return j;
};

console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));
// >>>>>>>> End #2 <<<<<<<<

// >>>>>>>> Number 2 as Functional <<<<<<<<

var summer = function(start, arrayString){
	return start + arrayString.length;
}

console.log(['what', 'happened', 'to', 'my', 'function'].reduce(summer, 0))

// >>>>>>>> End #2 Functional <<<<<<<<

//  >>>>>>> Start NUmber 3 <<<<<<<<
var keyValue = function(key, value){
	var obj = {};
	obj[key] = value;
	return obj;
};

console.log(keyValue('city', 'Denver'));
// >>>>>>>> End #3 <<<<<<<<

// >>>>>>>> Start Number 4 <<<<<<<<
var negativeIndex = function(array, negIndex){
	return array[array.length + negIndex];  
};

console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));
// >>>>>>>> End #4 <<<<<<<<<

// >>>>>>>> Start Number 5 <<<<<<<<
var removeM = function(string){
	var newString = ''
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) !== 'm'){
			newString += string.charAt(i)
		}
	}; return newString
};

console.log(removeM('memory'))
// >>>>>>>> End #5 <<<<<<<<

// >>>>>>>> Start Number 6 <<<<<<<<
var printObject = function(object){
	for (var key in object) {
		console.log(key + " is " + object[key]);
	}
};

printObject({ firstName: 'pork', lastName: 'chops' });
// >>>>>>>> End #6 <<<<<<<

// >>>>>>>> Start Number 7 <<<<<<<<
var vowels = function(string){
	var vowels = {
		a : 'a',
		e : 'e',
		i : 'i',
		o : 'o',
		u : 'u',
	}
	var stringArray = string.split('');
	var output = stringArray.filter(function(element){
		return element.toLowerCase() in vowels;
	})
	return output;
};

console.log(vowels('What evil odd ducks!'));
// >>>>>>>> End #7 <<<<<<<<

// >>>>>>>> Start Number 8 <<<<<<<<
var twins = function(array) {
	var test = 0

	for (var i = 0; i < (array.length ); i += 2) {
		if (array[i] === array[ i + 1 ]) {
			test++
		}
	}
	return test === array.length/2;
};

console.log(twins(['a', 'a', 'b', 'b']));
// >>>>>>>> End #8 <<<<<<<<

// >>>>>>>> Start Number 9 <<<<<<<<
var or = function(array){

	// var test = array.filter( function(element) {
	// 	return element;
	// });

	// return test.length > 0

	for (var i = 0; i < array.length; i++) {
		if (array[i] === true) {
			return 'Exercise 9 : Array [' + array + '] contains true = ' + true;
		}
	};return 'Exercise 9 : Array [' + array + '] contains true = ' + false;
};

console.log(or([false, false, false]));
// >>>>>>>> End #9 <<<<<<<<

// >>>>>>>> Start Number 10 <<<<<<<<
var unique = function(array){
	var obj = {}
	for (var i = 0; i < array.length; i++) {
		obj[array[i]] =  null;
	}; return Object.keys(obj);
};

console.log(unique(['todd', 'avery', 'maria', 'avery']));
// >>>>>>>> End #10 <<<<<<<<
























