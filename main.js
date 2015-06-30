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
	var vowelList = ['a', 'e', 'i', 'o', 'u'];
	var output = []
	
	for (var i = 0; i < string.length; i++) {
	
		var vowel = vowelList.indexOf(string.charAt(i))
	
		if ( vowel !== -1) {
			output.push(vowelList[vowel]);
		}
	
	} return output
};

console.log(vowels('What evil odd ducks!'));
// >>>>>>>> End #7 <<<<<<<<























