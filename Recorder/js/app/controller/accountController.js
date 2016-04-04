/**
 * Created by MikeWu on 3/27/2016.
 */
define(['myApp',"app/model/account","app/view/View"],function(myApp,Account,View){

    var bindings = [
        {
            element: 'addAccount',
            event: 'click',
            handler: 'openAddPopup'
        }
    ];



    function openAddPopup(){

    }


    function init(query){
        console.log(query);
        View.render(bindings);
    }

    return {init: init}
});