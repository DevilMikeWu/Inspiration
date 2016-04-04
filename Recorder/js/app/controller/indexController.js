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
    }


    function authCheck(){
        //Add password modal
        var text = "Authentication required";
        myApp.f7.modalPassword(text,authCallbackOk);
    }

    function authCallbackOk(password){
      console.log(password);
        if(password == 'zaq12wsx'){
            var options = {url: "html/accountType.html"};
            myApp.mainView.router.load(options);
        }else{
            myApp.f7.alert("Password is not correct!");
        }
    }

    return {init: init}
});