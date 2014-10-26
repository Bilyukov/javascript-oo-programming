
	//Animal Constructor function
	function Animal(config){

		if(config){
			//using with var the field age becomes private
			var _age = config.age;

			//using with this the field name becomes public
			this.name = config.name;
		}

		//adding functions to the Animal prototype in the constructor scope gives us access to the private fields
		Animal.prototype.getAge = function(){
			return _age;
		};

		Animal.prototype.setAge = function(age){
			_age = age;
		};
	};

	// we can modify the Animal prototype outside it`s constructor
	Animal.prototype.sayHello = function(){
		return "Hello I am "+ this.name + "!" 
	};

	function Cat(config) {

		//calling the animal constructor
		Animal.call(this, config);

		if (config) {
			this.breed = config.breed;
		}

	};

	//the cat prototype becomes an instance of Animal : prototype based inheritance
	Cat.prototype = new Animal();


	Cat.prototype.sayMiau = function(){
		return "Miau! My name is " + this.name + " and I am " + this.breed + "."
	};

	(function(){

		//Animal examples
		var myAnimal = new Animal({
			age  : 10,
			name : 'Goofy'
		});

		console.log("Animal.name:");

		//we have access to the public field name
		console.log(myAnimal.name);

		console.log("Animal.age:");

		//we do not have access to the private field age - the result will be undefined
		console.log(myAnimal.age);

		console.log("Animal.getAge():");

		//the class Animal function has access to the private field age
		console.log(myAnimal.getAge());

		//we can modify the private field using the setAge function
		myAnimal.setAge(3);

		console.log("Private field age modfied:");
		console.log(myAnimal.getAge());

		//Cat examples
		var myCat = new Cat({
			age  : 2,
			name : 'Josephine',
			breed : 'persian'
		});

		console.log("Cat.sayMiau()");
		console.log(myCat.sayMiau());

	})();