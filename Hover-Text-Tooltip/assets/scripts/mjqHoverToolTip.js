/*
jQuery Plugin
Plugin Name: mjqHoverToolTip 
Author: Muhammad Javed Khalil
Website: https://www.javedkhalil.com
Description: Show a customizable moving tooltip over any element (e.g. images, paragraphs, form fields).
Use Case: Form fields, images, text can have their own unique tooltips to provide more information about the related area
*/

(function ($) {

    $.fn.mjqhovertip = function( options ) {
 
        // Default Options
        var settings = $.extend({
            className: ""	// unique class for different tooltips // default is blank
        }, options );
 
        // Apply Options

		// get values from initialization from user file and store in our own variables
		// get className value
		var getClassName = settings.className;

		// getClassName is the var that we get from user

		// case 1
		// if class name is present do something
		// if(getClassName != '') {
		// 	$('#tip-wrap').addClass(getClassName);
		// }
		// else
		// {
		// 	$('#tip-wrap').removeClass(getClassName);
		// }

		// just to print values to see if system is accepting the values from initialization
		// settings.className = "custom value check"; // set custom value
		// console.log(settings.className);

		// in start remove all classes
		$('#tip-wrap').removeClass();

		// Append the tooltip wrapper at the last of body
		$("body").append("<div id='tip-wrap'></div>");
		
		// We can bind more events together for the tooltip
		//$(this).bind("mousemove mouseover mouseenter mouseup", function(e){ ... }

		// if mouse is over the area
		$(this).mousemove(function(e){

			// First remove class if any
			$('#tip-wrap').removeClass();

			// Then if we have the class name from user settings, add class at tooltip
			if(getClassName != '') {
				$('#tip-wrap').addClass(getClassName);
			}

			// Place the text from tip-text into the div 
			var thetext = $(this).attr('tip-text');
			// Show the tooltip
			$('#tip-wrap').text(thetext).show();
			// Move the tooltip with mouse move		
			$('#tip-wrap').css({ 'top':e.clientY+20, 'left':e.clientX+10 });

		// on mouse out remove tooltip and class
		}).mouseout (function(){
			// Remove tooltip
			$('#tip-wrap').hide();
			// Remove class
			$('#tip-wrap').removeClass();
		});

		return this; // allow jQuery chaining

    };

}( jQuery ));