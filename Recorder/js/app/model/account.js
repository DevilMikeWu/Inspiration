/**
 * Created by MikeWu on 3/27/2016.
 */
define(["myApp","utils/utils"],function(myApp,utils){

    function Account(account){
        account = account || {};
        this.id = utils.generateGUID();
        this.subject = account['subject'] || '';
        this.account = account['account'] || '';
        this.password = account['password'] || '';
        this.description = account['description'] || '';
        this.type = account['type'] || '';
        this.create_time = utils.formatDate(new Date());
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
        if(subject == ''){
            myApp.f7.alert("Subject can't be empty.");
            return false;
        }
        if(account == ''){
            myApp.f7.alert("Account can't be empty.");
            return false;
        }
        if(password == ''){
            myApp.f7.alert("Password can't be empty.");
            return false;
        }
        if(description == ''){
            myApp.f7.alert("Description can't be empty.");
            return false;
        }
        if(type == ''){
            myApp.f7.alert("Type can't be empty.");
            return false;
        }
        return true;
    };

    return Account;
});