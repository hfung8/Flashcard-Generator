//BasicCard Constructor

//Implement inquirer for prompts
var inquirer = require('inquirer');
//Create questions variable
var questions = [
	{
		type: 'input',
		name: 'firstQuestion',
		message: 'Input your question',
	},

	{	type: 'input',
		name: 'firstAnswer',
		message: 'Input your answer',
	},

	{	type:'confirm',
		name: 'confirmed',
		message: 'Did you input a question?',
	}

];

//Create a function to get question and answer
inquirer.prompt(questions).then(function(answers){
	// console.log(answers);

//Create a method to get front and back arguments
function BasicCard(front, back){
	if (!(this instanceof BasicCard)){
		return{
			front:front,
			back:back
		};
	} 
	this.front = front,
	this.back = back
};

//Create a new FlashCard
var realAnswer = new BasicCard(answers.firstQuestion,answers.firstAnswer);
console.log("The Question is " + realAnswer.front);
console.log("Your Answer is " + realAnswer.back)
});

// //ClozeCard Constructor 
// function ClozeCard(text, cloze){
// 	this.text = text,
// 	this.cloze = cloze
// };

// var clozeAnswer = new ClozeCard("input your text here","input your cloze argument here");
// console.log("Your text is " + clozeAnswer.constructor);
// console.log("The cloze part is " + clozeAnswer.constructor)	

