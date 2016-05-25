/**
 * Created by MikeWu on 3/27/2016.
 */
define(['myApp','app/model/account','app/view/accountView'],function(myApp,Account,View){
;
    var account = undefined;
    var bindings = [
        {
            element: '.account-edit-link',
            event: 'click',
            handler: runEditMode
        }
    ];

    function runEditMode(){
       myApp.router.load("accountEdit",{id:account.id});
    }


    function init(query){
        console.log(query);
        var accounts = JSON.parse(localStorage.getItem("accounts"));
        account = myApp.Utils.getObjectFromList(accounts,query['id']);
        View.render({
            "model": account,
            "bindings": bindings
        });
    }

    return {init: init};
});