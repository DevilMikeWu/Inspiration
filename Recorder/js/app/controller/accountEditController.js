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
        var accounts = JSON.parse(localStorage.getItem("accounts"));
        if(query && query.id){
            account = myApp.Utils.getObjectFromList(accounts,query.id);
            status.isNew = false;
        }else{
            status.isNew = true;
            account = new Account();
            account.setValues(query);
        }
        if(account.validate()){
            
        }
        //console.log(query);
        View.render({ model: account, bindings: bindings, status: status });
    }

    function deleteAccount(){
        console.log("delete Account");
        myApp.f7.actions([[{
            text: 'Delete Account',
            red: true,
            onClick: function() {
                var accounts = JSON.parse(localStorage.getItem("accounts"));
                accounts = myApp.Utils.removeObjectFromList(accounts,account.id);
                localStorage.setItem("accounts", JSON.stringify(accounts));
                myApp.router.load('accountList',{type:account.type});
                myApp.mainView.goBack("html/accountList.html", false);
                myApp.f7.closeModal();
            }
        }], [{
            text: 'Cancel',
            bold: true
        }]]);
    }



    function saveAccount() {
        var values = myApp.f7.formToJSON("#account-form");
        console.log(values);
        account = new Account();
        account.setValues(values);
        //account.validate();
        if (account.validate()) {
            var accounts = JSON.parse(localStorage.getItem("accounts"));
            if(!status.isNew){
                accounts = myApp.Utils.updateObjectFromList(accounts,account);
            }else{
                //Add this account node into List
                accounts.push(account);
            }
            localStorage.setItem("accounts", JSON.stringify(accounts));
            param['type'] = account['type'];
            myApp.router.load('accountList', param);
            closePage();
        }
    }


    function closePage(){
        myApp.f7.showPreloader("Saving...");
        setTimeout(function(){
            myApp.f7.hidePreloader();
            if(!status.isNew){
                myApp.router.load("account",{id:account.id});
            }else{
                myApp.mainView.loadPage("html/account.html?id="+account['id'],false);
            }
            myApp.f7.closeModal();
        },1000);
    }

    return {init: init};
});