/**
 * Created by MikeHero on 27/3/2016.
 */
require.config({
    paths: {
        handlebars: "lib/handlebars",
        text: "lib/text",
        hbs: "lib/hbs"
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        }
    }
});


define('myApp', ['app/router','utils/utils'], function(Router,Utils) {
    Router.init();
    var f7 = new Framework7({
        modalTitle: 'Recorder',
        swipePanel: 'left',
        animateNavBackIcon: true
    });
    var mainView = f7.addView('.view-main', {
        dynamicNavbar: true
    });
    return {
        f7: f7,
        mainView: mainView,
        router: Router,
        Utils: Utils
    };
});