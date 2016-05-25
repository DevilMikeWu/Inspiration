/**
 * Created by MikeHero on 2/4/2016.
 */
define(['myApp', 'app/model/account', 'hbs!app/model/accountEdit'],function(myApp,account,editTemplate){
    function render(params){
        var template = editTemplate({model: params.model,status: params.status});
        myApp.f7.popup(template);
        // removeEvents(params.bindings);
        bindEvents(params.bindings);
    }
    function bindEvents(params){
        for(var i in params){
            $(params[i].element).on(params[i].event,params[i].handler);
        }
    }

    function removeEvents(params){
        for(var i in params){
            $(params[i].element).off(params[i].event);
        }
    }

    return {render: render};
});