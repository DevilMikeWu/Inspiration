/**
 * Created by MikeWu on 3/26/2016.
 */
define(function() {
    var $ = Framework7.$;

    /**
     * Init router, that handle page events
     */

    // 0 means filter , 1 means load
    var pageFilter = {
        index : 1,
        accountType: 0,
        accountList: 1,
        account: 1,
        test: 0
    };


    function init() {
        $(document).on('pageBeforeInit', function (e) {
            var page = e.detail.page;
            console.log(page.name);
            if(pageFilter[page.name] != 0 && pageFilter[page.name] != undefined){
                load(page.name, page.query);
            }
        });
    }

    /**
     * Load (or reload) controller from js code
     * @param controllerName
     * @param query
     */
    function load(controllerName, query) {
        console.log('app/controller/'+ controllerName + 'Controller');
        require(['app/controller/'+ controllerName + 'Controller'], function(controller) {
            controller.init(query);
        });
    }

    /**
     * Send message to module
     * @param moduleName
     * @param query
     */
    /*function sendMessage(moduleName, message) {
        require(['build/' + moduleName + '/'+ moduleName + 'View'], function(module) {
            module.receiveMessage(message);
        });
    }*/

    return {
        init: init,
        load: load
        //sendMessage: sendMessage
    };
});