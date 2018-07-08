# mjqHoverToolTip

Show a customizable moving tooltip over any element (e.g. images, paragraphs, form fields). You can have as many different tooltips as you like. You can initialize this tooltip at different elements with different class. The tooltip text is in element attribute tip-text="your tooltip text here". .mjqtip is the class that is being used to initialize the tooltip on elements in example. You can initialize it on any other class of ID and give it seperate class to change the styles.

- Dependency: jQuery
- jQuery Support: jquery 1.12.4+
- Web Browsers Support: All
- Limitations: Can not work on tablets and mobile because there is no hover over those devices

For **documentation**, usage, and examples, download and open index file in web browser.

## How To Use

Use CSS and JS files from dist folder.

Call mjqHoverToolTip.min.js below jQuery script and initialize the plugin like below:

### Default initialization

$(document).ready(function(){ $(".mjqtip").mjqhovertip(); });

or

$(".YourClass").mjqhovertip();

or

$("#anyID").mjqhovertip();

## Initialize with Options

$(document).ready(function() {

$('body').mjqhovertip({

className: ""	// class name of your choice // default is empty

});

});

### Contributing to this project

We welcome all to participate in making this the best software it can be.

### Credits

- Concept and Development by [Muhammad Javed Khalil](https://javedkhalil.com)
- Design and CSS by [Muhammad Javed Khalil](https://javedkhalil.com)
- Repository maintained by [@techmynd](https://github.com/techmynd)