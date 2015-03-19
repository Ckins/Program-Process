
var member  ={
	name: 'zhang',
	age:23,
	'goto': 'United States',
};

// delete and add attribute dynamic
delete member.name;
member.nickName = 'hello';

member.nickName;
member.name;

// safe way
var name = member.name || 'noValue';

// Closure 
var fibonacci = (function(){
	var memo = [0, 1];
	var fib = function(n){
		var result = memo[n];
		if (typeof(result) !== 'number') {
			result = fib(n-1) + fib(n-2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
})();

for (var i = 0; i <= 10 ; i+=1) {
	console.log('//'+i+';'+fibonacci(i));
}

// function invoking
var sayHello = function(){
	var self = this;
	var innerFun = function() {
		console.log(self.name + 'say H');
	}
	innerFun();
};

peter = {name:'peter'};
var name = 'cuihao';
peter.greeting = sayHello;
peter.greeting();

// version2
peter = {name:'peter',
         sayHello: function() {
	        var innerFun = function() {
		    console.log(this.name + 'say H');
	        }
	        innerFun();
        }
};
var name = 'cuihao';
peter.sayHello();

// version3
peter = {name:'peter',
         sayHello: function() {
	        var innerFun = function() {
		        console.log(this.name + 'say H');
	        }
	        return innerFun;
        }()
};
var name = 'cuihao';
peter.sayHello();

//version4
var sayHello = (function(){
	var innerFun = function() {
		console.log(this.name + 'say H');
	}
	return innerFun;
})();

peter = {name:'peter'};
var name = 'cuihao';
peter.greeting = sayHello;
peter.greeting();

// 闭包指函数和函数所能访问的外部变量构成的组合
// 或者that for this 

// apply/call kind
var sayHello = function(){

	console.log(this.name + 'say H');

}

// prototype
var Alice = function() {
	return this.name = 'alice';
}
alice = new Alice();
alice.__proto__;
