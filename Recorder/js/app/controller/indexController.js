/**
 * Created by MikeHero on 28/3/2016.
 */
define(['myApp',"app/view/indexView"],function(myApp,View){

    var bindings = [
        {
            element: '#accountSection',
            event: 'click',
            handler: authCheck
        }
    ];
    function init(query){
        console.log(query);
        
        View.render(bindings);
        var t1 = Test();
        var t2 = Test();
        console.log(t1 === t2);
    }


    function authCheck(){
        var text = "Authentication required";
        myApp.f7.modalPassword(text,authCallbackOk);
    }

    function authCallbackOk(password){
        //Add password modal
      console.log(password);
        if(password == 'zaq12wsx'){
            var options = {url: "html/accountType.html"};
            // myApp.mainView.router.load(options);
            myApp.mainView.loadPage("html/accountType.html");
        }else{
            myApp.f7.alert("Password is not correct!");
        }
    }


    function Test(){

        if(typeof Test.instance === 'object' ){
            return Test.instance;
        }
        this.a = "Hello";
        this.b = "Singleten";
        Test.instance = this;
    }

    return {init: init};
});