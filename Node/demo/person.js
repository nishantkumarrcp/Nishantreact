var Person = function() {
	var name = '';
	this.setName = function(value){
		name = value;
	}
	this.getName = function(){
		return name;
	}
}
module.exports = Person;