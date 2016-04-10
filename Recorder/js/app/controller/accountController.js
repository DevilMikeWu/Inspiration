/**
 * Created by MikeWu on 3/27/2016.
 */
define(['myApp',"app/model/account","app/view/accountView"],function(myApp,Account,View){

    var bindings = [
        {
            element: 'editAccount',
            event: 'click',
            handler: runEditMode
        }
    ];



    function runEditMode(){

    }


    function init(query){
        console.log(query);

    }

    return {init: init}
});