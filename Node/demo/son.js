class Father {
	getName(){
		return "Arjun";
	}
	getGender(){
		return "M";
	}
}

class Son extends Father {
	getName(){
		return "Deepak";
	}
	getCity(){
		return "Hyderabad";
	}
}
module.exports = Son;