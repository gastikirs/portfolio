import $ from 'jquery';

class ContactForm {
	constructor() {

		this.contactForm = $('#contact-form');

		this.handleForm();
	}

	handleForm() {
		this.contactForm.submit(function(e) {
			e.preventDefault();
			$.ajax({
				url: '//formspree.io/gaston.kirsman@gmail.com',
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json',
			});
		});
	}
}

export default ContactForm;