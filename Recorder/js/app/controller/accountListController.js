/**
 * Created by MikeHero on 28/3/2016.
 */
define(['myApp',"app/view/accountListView"],function(myApp,View){

    var bindings = [
        {
            element: '#addAccount',
            event: 'click',
            handler: openAddPopup
        }
    ];

    var param = {
        type: ""
    };

    function openAddPopup(){
        myApp.router.load("accountEdit",param);
    }

    function init(query){
        console.log(query);
        var accounts = loadAccounts();
        console.log(accounts);
        //initialize type value
        param['type'] = query['type'];
        View.render({bindings: bindings,model:accounts});
    }

    function loadAccounts(){
        var accountsStr = localStorage.getItem("accounts");
        console.log(accountsStr);
        var accounts = accountsStr ? JSON.parse(accountsStr) : tempInitializeStorage();
        /*
           Account List operation (Sort, format etc.)
           ...
         */
        //console.log(accounts);
        return accounts;
    }

    function tempInitializeStorage(){
        var accounts = [];
        localStorage.setItem("accounts",JSON.stringify(accounts));
        return accounts;
    }

    return {init: init}
});