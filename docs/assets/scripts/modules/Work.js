import $ from 'jquery';

class Work {
	constructor() {
		this.workImageGDS = $(".work__image-gds");
		this.workImageAlma = $(".work__image-alma");
		this.workImageGrowit = $(".work__image-growit");

		this.alma = $("#work-almashopping");
		this.growit = $("#work-growit");
		this.gds = $("#work-gds");

		this.workContentGDS = $(".work__details-gds");
		this.workContentAlma = $(".work__details-alma");
		this.workContentGrowit = $(".work__details-growit");

		this.handleEvents();

	}



	handleEvents() {
		this.workImageGDS.on('click', this.hideTwoAndThree.bind(this));
		this.workImageAlma.on('click', this.hideOneAndThree.bind(this));
		this.workImageGrowit.on('click', this.hideOneAndTwo.bind(this));
	}

	hideTwoAndThree() {
		var that = this;
		if(this.isScreenMedium()) {
			if(!this.workContentGDS.is(':visible')) {
				this.alma.fadeOut();
				this.growit.fadeOut();
				setTimeout(function(){
					that.workContentGDS.show();
				}, 500);
			} else {
				this.workContentGDS.fadeOut();
				setTimeout(function(){
					that.alma.fadeIn();
					that.growit.fadeIn();
				},500);
			}
		}
	}

	hideOneAndThree() {
		var that = this;
		if(this.isScreenMedium()) {
			if(!this.workContentAlma.is(':visible')) {
				this.gds.fadeOut();
				this.growit.fadeOut();
				setTimeout(function(){
					that.workContentAlma.show();
				}, 500);
			} else {
				this.workContentAlma.fadeOut();
				setTimeout(function(){
					that.gds.fadeIn();
					that.growit.fadeIn();
				},500);
			}
		}
	}

	hideOneAndTwo() {
		var that = this;
		if(this.isScreenMedium()) {
			if(!this.workContentGrowit.is(':visible')) {
				this.gds.fadeOut();
				this.alma.fadeOut();
				setTimeout(function(){
					that.workContentGrowit.show()
				}, 500);
			} else {
				this.workContentGrowit.fadeOut();
				setTimeout(function(){
					that.gds.fadeIn();
					that.alma.fadeIn();
				},500);
			}
		}
	}

	isScreenMedium() {
		if ($(window).width() > 800) { 
    	return true;
		}
	}

}

export default Work;