(function(global , $){
	var Greeter = function(firstname, lastname, language){
		return new Greeter.init(firstname, lastname, language);
	}

	var supportedLangs = ['en', 'es'];

	var greetings = {
		en: "Hello",
		es: "Hola"
	};

	var formalGreetings = {
		en: "Greetings",
		es: "Saludos"
	};

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio session'
	};

	Greeter.prototype = {
		fullName: function(){
			return this.firstname + " " + this.lastname;
		},

		validate: function(){
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		},
		greeting: function(){
			return greetings[this.language] + " " + this.firstname;
		},
		formalGreetings: function(){
			return formalGreetings[this.language] + " " + this.fullName();
		},
		greet: function(formal){
			var msg;
			// if undefined or null it will be coarced to 'false'
			if(formal) {
				msg = this.formalGreetings();
			}
			else {
				msg = this.greeting();
			}
			if (console) {
				console.log(msg);
			}

			return this;
		},
		log: function(){
			if (console) {
				 console.log(logMessages[this.language] + ':  '+ this.fullName());
			}
			return this;
		},
		setLang: function(lang){
			this.language = lang;
			this.validate();
			return this;
		}
	};

	Greeter.init = function(firstname, lastname, language){
		var self = this;
		self.firstname = firstname || "Noyan";
		self.lastname = lastname || "AYDIN";
		self.language = language || "en";
	}

	Greeter.init.prototype = Greeter.prototype;

	global.Greeter = global.G$ = Greeter;
}(window, $))