/**
 * Created by MikeHero on 28/3/2016.
 */
define(["myApp"],function(myApp){
    function render(params){
        bindEvents(params);
    }
    function bindEvents(params){
        for(var i in params){
            $(params[i].element).on(params[i].event,params[i].handler);
        }
    }
    return {render: render}
});