# mjqExLinks

mjqExLinks can be used to open external links in new window and apply optional attributes to external links such as rel (external, nofollow). Apply at whole web page or any section of webpage.

- Dependency: jQuery
- jQuery Support: jquery 1.12.4+
- Web Browsers Support: All

For **documentation**, usage, and examples, download and open index file in web browser.

## How To Use

Use files from dist folder. 

Call mjqExLinks.min.js below jQuery script and initialize the plugin like below:

### Default initialization

$(document).ready(function() {
	$("body").mjqexlinks();
});

or

$(".YourClass").mjqexlinks();

or

$("#anyID").mjqexlinks();

## Initialize with Options

$(document).ready(function() {

$('body').mjqexlinks({

target: "_blank",		// Default is _blank 

className: "external",	// class name of your choice // comment line if you don't want to use it

nofollow: true,			// use rel="nofollow" // true or flase

external: false			// use rel="external" // true or flase

});

});

- If you want to apply this to whole webpage use body selector like below:
- $('body').mjqexlinks({ ... options ... });
- If you do not want to use nofollow or external attributes, change true to false
- target: '_blank', you can use any target, this plugin does not restrict you to use only target _blank

### Contributing to this project

We welcome all to participate in making this the best software it can be.

### Credits

- Concept and Development by [Muhammad Javed Khalil](https://javedkhalil.com)
- Design and CSS by [Muhammad Javed Khalil](https://javedkhalil.com)
- Repository maintained by [@techmynd](https://github.com/techmynd)