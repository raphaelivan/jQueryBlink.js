;(function($){
    "use strict"

    $.fn.blink = function(options) {
        var config;

        config = { 
            delay:  500 

            ,   effect: { 
                    'color': '#fff'
                ,   'background-color': "#f00"
                ,   "width": "20px"
                ,   "border-radius": "20px"
                ,   "padding": "0px"
                ,   "text-align": "center"
            }
        }

        $.extend(config, options);

        return this.each(function() {
            var self, state;
            
            self  = $(this)
            ,   state = "off";

            setInterval( function() {

                if(state == "on") {
                    self.css(config.effect);
                    state = "off";
                } else {
                    self.removeAttr("style");
                    state = "on";
                }

            }
            , config.delay);
        });
    };
}(jQuery));