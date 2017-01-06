import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerEl = $(".jumbo__title");
		this.siteLogo = $(".site-header__logo");
		this.createHeaderWaypoint();

		this.pageSections = $(".page-section");
		this.createPageSectionWaypoints();
		this.headerLinks = $(".primary-nav a");
		this.addSmoothScrolling();
	}

	addSmoothScrolling () {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerEl[0],
			handler: function(direction) {
				if(direction == "down") {
					that.siteHeader.addClass("site-header--dark");
					that.siteLogo.addClass("site-header__logo--smaller");
				} else {
					that.siteHeader.removeClass("site-header--dark");
					that.siteLogo.removeClass("site-header__logo--smaller");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "down") {
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
					that.headerLinks.removeClass("is-current-link");
					$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "30%" 
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "up") {
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
					that.headerLinks.removeClass("is-current-link");
					$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-30%" 
			});
		});
	}

}

export default StickyHeader;