"use strict" //on support new standarts
//Must be in script or function start

// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
// good
const foo = a || b;
const bar = !!c;
const baz = !c;


// T I P E S

/*number*/
//integer and fractional numbers. May have "Infinity" and "NaN"
//https://learn.javascript.ru/number
+variable == Number(variable)
+"\n058   \n" //58
+null == +" " //true, 0 in bouth arguments
+undefined //NaN
12.36.toFixed(1); //12.4
//12.toFixed(1); //error!
12..toFixed(1); //12.0
0xFF === 255; //true
Infinity == +"\nInfinity  "; //true
var nan = NaN;
isNaN(NaN) == (nan !== nan) //true
function isNumeric(n){return !isNaN(parseFloat(n)) && isFinite(n)} //strict number comparison
parseInt('FF', 16) // 255
(255).toString(16) //'FF'

/*string*/
//assigned with "" or ''. "char" not exist in JS
variable + "" == String(variable) //true
"ac" > "abc" //true
"ab" < "abc" //true
"\b";	/*Backspace*/ "\f";	/*Form feed*/ "\r";    	/*Carriage return*/
"\n";	/*New line*/  "\t";	/*Tab*/       "\u00A9";  /*"©" - Unicode character*/
"s t r i n g".split(" ") //return ["s","t","r","i","n","g"]

/*boolean*/
//May have only "true" or "false", assigned:
!!value == Boolean(value) //true
var bool1 = true, bool2 = false;
!!1 && !!"0" && !!"string" //true
!!0 || !!null || !!undefined || !!NaN //false
//if(value) - convert value to boolean type for comparison

/*null*/
//expactable empty

/*undefined*/
//unexpactable empty

/*object*/
var obj = {"first name": "Black", secondName: "Tom"};
Object.keys(obj) //["first name", "secondName"]
delete obj["first name"];
"secondName" in obj; /*true*/ "first name" in obj; /*false*/
Object.assign(obj, {key: 'value'}) //concatenate objects

/*array*/
{
	let arr = new Array(5);
	let a = new Array(1,2,3,4,5); /*==*/ [1,2,3,4,5];
	a.length = 3; /*shrink array*/ a.length == 0 //clear array
	Array.from('str') //["s", "t", "r"] //convert data to array/ Data: Map, Set, string, 
	a.some((item, i, arr) => item > 2) //true if at least once retune true
	a.every((item, i, arr) => item > 2) //false if at least once retune false
	a.push();//add new element in the end and return array length
	a.pop();//remove and return last element
	a.unshift();//add new first element and return array length
	a.shift();//remove and return first element
	a.length = 0;//clear array
	a.reverse()//revers elements in array and return result
	a.join(str) //join all elements by str, return string
	a.slice(firstIndex,lastIndex) //return new array with target elements
	a.sort() //sort by Unicode min to max
	a.sort(function(a, b){return a - b}) //sort numeric values from min to max
	a.splice(index, deleteCount, firstElementToPaste, NElementToPaste, LastElementToPaste)
	a.forEach(func(item, i, arr)) //havent return
	a.filter(func(item, i, arr)) //return array, whith elements by func iteration return true
	a.map(func(item, i, arr)) //return array, whith elements from func iteration return
	a.reduce(func(previousValue, currentItem, index, arr), initialValue) //return last iteration return
}

//"||" - OR, return first true value or last false
//"&&" - AND, return first false value or last true
//AND have biggest priority than OR
//"!" - convert and revert value to boolean type


"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //infiniti
"  -9\n" + 5 //-4
"  -9\n" - 5 //-14
5 && 2 //2
2 && 5 //5

//prototypes
if(false){
	//link to propertys and methods other obj (read only)
	const animal = {
		eats: true
	},
	rabbit = {
		jumps: true,
		__proto__: animal
	};
	rabbit.eats; //true

	Object.keys(rabbit) // ["jumps"]

	for(k in rabbit) {console.log(k)} //jumps, eats

	for(k in rabbit) {
		if(rabbit.hasOwnProperty(k)) console.log(k)
	} //jumps

	animal.feed = function() {this.hungry = false;}
	rabbit.feed();
	rabbit.hungry; //false


	Object.create(null) //create obj without system proto

}
