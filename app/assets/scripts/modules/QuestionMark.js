import $ from 'jquery';

class QuestionMark {
	constructor() {
		this.questionMarkModellica = $(".work__question-mark--modellica");
		this.alma = $("#work-almashopping");
		this.growit = $("#work-growit");
		this.gds = $("#work-gds");
		this.test = $(".test1");

		this.handleEvents();
	}

	handleEvents() {
		this.questionMarkModellica.on('click', this.moveRightWorks.bind(this));
	}

	moveRightWorks() {

	}

}

export default QuestionMark;