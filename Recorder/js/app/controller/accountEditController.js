/**
 * Created by MikeHero on 2/4/2016.
 */

define(['myApp',"app/model/account","app/view/accountEditView"],function(myApp,Account,View){
    var account = undefined;
    var param = {};


    var bindings = [
        {
            element: '.account-delete-button',
            event: 'click',
            handler: deleteAccount
        },
        {
            element: '.account-save-button',
            event: 'click',
            handler: saveAccount
        }
    ];

    var status = {
        isNew : false
    };

    function init(query){
        var accounts = localStorage.getItem("accounts");
        if(query && query.id){
             account = getObjectFromList(accounts,query.id);
            status.isNew = false;
        }else{
            status.isNew = true;
            account = new Account();
            account.setValues(query);
            param = query;

        }
        //console.log(query);
        View.render({ model: account, bindings: bindings, status: status });
    }

    function deleteAccount(){
        console.log("delete Account");
    }

    function saveAccount(){
        var values = myApp.f7.formToJSON("#account-form");
        console.log(values);
        account = new Account();
        account.setValues(values);
        //account.validate();
        if(account.validate()){
            //Add this account node into List
            var accounts = JSON.parse(localStorage.getItem("accounts"));
            accounts.push(account);
            localStorage.setItem("accounts",JSON.stringify(accounts));
            myApp.router.load('accountList',param);
            closePage();
        }
    }


    function closePage(){
        myApp.f7.showPreloader("Saving...");



        setTimeout(function(){
            myApp.f7.hidePreloader();
            myApp.router.load('account',param);
            myApp.f7.closeModal('.popup-account');
        },1000);
    }

    return {init: init};
});