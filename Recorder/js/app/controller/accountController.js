/**
 * Created by MikeWu on 3/27/2016.
 */
define(['myApp',"app/model/account","app/view/accountView"],function(myApp,Account,accountView){

    var bindings = [
        {
            element: '',
            event: '',
            handler: ''
        }
    ];
    function init(query){
        console.log(query);
        accountView.render(bindings);
    }




    return {init: init}
});