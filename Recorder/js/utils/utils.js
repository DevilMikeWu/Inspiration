/**
 * Created by MikeWu on 3/27/2016.
 */

define(function() {

    function generateGUID(){
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x7|0x8)).toString(16);
        });
        return uuid;
    }

    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function formatDate(date){
        var day = undefined,
            month = undefined,
            year = undefined;
        if(date == undefined){
            var date = new Date();
        }else{
            if(!(date instanceof Date)){
                console.log("The parameter passed to this method is not a Date type.");
                return false;
            }
        }
        day = (date.getDate() < 10 ) ? "0"+date.getDate() : date.getDate();
        month = ((date.getMonth() + 1)  < 10 ) ? "0"+(date.getMonth()+1) : (date.getMonth() + 1);
        year = date.getFullYear();

        //var dateFormat = day + "/"+ month + "/" + year;
        var dateFormat = year +"-" + month + "-" + day;
        return dateFormat;
    }

    function getObjectFromList(list,id){
         if(Array.isArray(list)){
             for( var i in list){
                 if(list[i]['id'] == id){
                     return list[i];
                 }
             }
         }
        return false;
    }

    function removeObjectFromList(list,id){
        var flag = false;
        var newList = [];
        if(Array.isArray(list)){
            for (var i in list) {
                if (list[i]['id'] !== id) {
                    newList.push(list[i]);
                } else {
                    flag = true;
                }
            }
            return newList;
        }
        return flag;
    }

    function updateObjectFromList(list,object){
        if(Array.isArray(list)){
            for( var i in list){
                if(list[i]['id'] == object['id']){
                    list[i] = object;
                }
            }
            return list;
        }
        return false;
    }


    return {
        generateGUID: generateGUID,
        getRandomInt: getRandomInt,
        getObjectFromList: getObjectFromList,
        formatDate: formatDate,
        removeObjectFromList: removeObjectFromList,
        updateObjectFromList: updateObjectFromList
    };
});