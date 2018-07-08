/*
jQuery Plugin
Plugin Name: mjqExLinks 
Author: Muhammad Javed Khalil
Website: https://www.javedkhalil.com
Description: Process external links of website and apply nofollow and more to only external links
Benefits: Improves Website SEO
*/

(function ($) {

    $.fn.mjqexlinks = function( options ) {
 
        // Default Options
        var settings = $.extend({
            target: "_blank",	// use target="_blank" // will always be there if the plugin is activated // you can only change value
            className: "",		// unique class, user input, default null
            nofollow: true,	    // use rel="nofollow" // true or false
            external: false	    // use rel="external" // true or false
        }, options );
 
        // Apply Options

        
        // get the links
        // var getLinks = this.find('a');

        // get only external links
		var getLinks = this.find('a[href^="http://"]:not([href*="' + location.hostname + '"]), a[href^="https://"]:not([href*="' + location.hostname + '"])');

		// get values from initialization from user file and store in our own variables
		// get rel nofollow value
		var getNoFollow = settings.nofollow;
		// get rel external value
		var getExternal = settings.external;
		// get className value
		var getClassName = settings.className;

		// NOW
		// getNoFollow, getExternal are true or false and getClassName has got class value if user has used it

		// case 1
		// if nofollow is true and external is false // only show rel="nofollow"
		if(getNoFollow == true && getExternal == false) {
			newRel = "nofollow";
		}
		// case 2
		// if nofollow is false and external is true // only show rel="external"
		else if(getExternal == true && getNoFollow == false) {
			newRel = "external";
		}
		// case 3
		// if nofollow is true and external is true // show rel="nofollow external"
		else if(getExternal == true && getNoFollow == true) {
			newRel = "nofollow external";
		}

		// just to print values to see if system is accepting the values from initialization
		// settings.nofollow = "custom value check"; // set custom value
		// console.log(settings.nofollow);

		// if className is not empty, process the logic below 
		if(getClassName != '') {
	    
			if(getExternal == false && getNoFollow == false) {
		    	return getLinks.attr({ target: settings.target, class: getClassName });
			}

		    if(getExternal == true || getNoFollow == true) {
		    	return getLinks.attr({ target: settings.target, rel: newRel, class: getClassName });
			}

		}
		// if className is empty, process the logic below
		else {
			if(getExternal == false && getNoFollow == false) {
		    	return getLinks.attr({ target: settings.target});
			}

		    if(getExternal == true || getNoFollow == true) {
		    	return getLinks.attr({ target: settings.target, rel: newRel });
			}			
		}

		return this; // allow jQuery chaining

    };
 
}( jQuery ));