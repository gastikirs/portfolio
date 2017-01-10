import $ from 'jquery';

class ContactForm {
	constructor() {

		this.contactForm = $('#contact-form');

		this.handleForm();
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
					var message = "<div class='box box--success'><h3><i class='fa fa-check' aria-hidden='true'></i>Your message has been successfully sent</h3></div>"
					that.contactForm[0].reset();
					that.contactForm.prepend(message);
				}
			});
		});
	}
}

export default ContactForm;