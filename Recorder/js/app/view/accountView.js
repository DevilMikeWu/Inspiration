/**
 * Created by MikeWu on 3/27/2016.
 */
define(['hbs!app/model/accountItem'],function(template){
    function render(param){
       var t = template({model:param['model']});
       $(".account-page").html(t);
       bindEvents(param['bindings']);
    }
    function bindEvents(params){
        for(var i in params){
            $(params[i].element).on(params[i].event,params[i].handler);
        }
    }
    return {render: render};
});

