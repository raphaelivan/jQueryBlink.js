## jQueryBlink.JS
jQueryBlink is a simple jQuery Blink Effect

# Please, don't use this

## <blink> HTML element
The blink element has been consistently criticised by usability and accessibility.
This plugin allows you to create the same effect that **<blink>** html element.


## Example
[jsFiddle](http://jsfiddle.net/JRFcB/1/embedded/result/)

## Usage
Using the default style
~~~.js
  $("p.unread").blink();
~~~

This will apply the following style:
~~~.css
color: '#fff';
background-color: "#f00";
width: "20px";
border-radius: "20px";
padding: "0px";
text-align: "center";
~~~

## Overwrite
Overwrite the default style
~~~.js
  $("p.unread").blink({
    effect : {
        "color" : "#000"
      , "background" : "#fff"
    }
  });
~~~

Overwrite the default delay
~~~.js
  $("p.unread").blink({
    delay: 1000 //the default is 500ms
  });
~~~

## License
jQueryBlink.JS is available under the MIT license.