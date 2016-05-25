/**
 * Created by MikeHero on 28/3/2016.
 */
define(['hbs!app/model/account-list-Item'], function(template) {

    function render(params) {
        var t = template(params.model);
        $('.accounts-list ul').html(t);
        //$('.searchbar-cancel').click();
        unbindEvents(params.bindings);
        bindEvents(params.bindings);
    }

    //function reRender(params) {
    //    $('.contacts-list ul').html(template(params.model));
    //    $('.contacts-list-header').text(params.header);
    //    $('.searchbar-cancel').click();
    //}

    function unbindEvents(bindings){
        for (var i in bindings) {
            $(bindings[i].element).off(bindings[i].event);
        }
    }

    function bindEvents(bindings) {
        for (var i in bindings) {
            $(bindings[i].element).on(bindings[i].event, bindings[i].handler);
        }
    }

    return {
        render: render
        //reRender: reRender
    };
});