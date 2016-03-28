/**
 * Created by MikeWu on 3/27/2016.
 */
define(["myApp"],function(myApp){

    function Account(account){
        account = account || {};
        this.subject = account['subject'].trim() || '';
        this.account = account['account'].trim() || '';
        this.password = account['password'].trim() || '';
        this.description = account['description'].trim() || '';
        this.type = account['type'].trim() || '';
        this.create_time = account['create_time'] || '';
        this.update_time = account['update_time'] || '';
    }

    Account.prototype.setValues = function(values){
          values = values || {};
          for(var key in values){
            this[key] = values[key];
          }
    };

    Account.prototype.validate = function(){
        var subject = this.subject,
            account = this.account,
            password = this.password,
            description = this.description,
            type = this.type;
        if(subject != ''){
            myApp.f7.alert("Subject can't be empty.");
            return false;
        }
        if(account != ''){
            myApp.f7.alert("Account can't be empty.");
            return false;
        }
        if(password != ''){
            myApp.f7.alert("Password can't be empty.");
            return false;
        }
        if(description != ''){
            myApp.f7.alert("Description can't be empty.");
            return false;
        }
        if(type != ''){
            myApp.f7.alert("Type can't be empty.");
            return false;
        }
    };

    return Account;
});