import $ from 'jquery';

class QuestionMark {
	constructor() {
		this.questionMarkModellica = $(".work__question-mark--modellica");
		this.work = $(".work");
		this.handleEvents();
	}

	handleEvents() {
		var that = this;
		this.questionMarkModellica.on('click', function() {
		});
	}
}




export default QuestionMark;