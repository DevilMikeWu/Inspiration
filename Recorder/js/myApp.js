/**
 * Created by MikeHero on 27/3/2016.
 */
define('myApp', ['app/router'], function(Router) {
    Router.init();
    var f7 = new Framework7({
        modalTitle: 'Recorder',
        animateNavBackIcon: true
    });
    var mainView = f7.addView('.view-main', {
        dynamicNavbar: true
    });
    return {
        f7: f7,
        mainView: mainView,
        router: Router
    };
});