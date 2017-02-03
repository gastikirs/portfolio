import $ from 'jquery';
import modal from '../../materialize/js/modal.js';

class ContactForm {
	constructor() {

		this.contactForm = $('#contact-form');
		this.modal = $('.modal');
		this.modalButton = $('.modal__button');
		this.window = $(window);

		this.handleForm();
		this.handleEvents();
	}

	handleForm() {
		var that = this;
		this.contactForm.submit(function(e) {
			e.preventDefault();
			$.ajax({
				url: '//formspree.io/gaston.kirsman@gmail.com',
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json',

				success: function() {
					that.contactForm[0].reset();
					that.modal.show();
				}
			});
		});
	}

	handleEvents() {
		this.modalButton.click(() => this.modal.hide());
		this.window.click(() => this.modal.hide());
	}
}

export default ContactForm;