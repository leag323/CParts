
app.factory("items", function(Item) {
    var itemsArr = [];

    var getAll = function() {
        return itemsArr;
    }

    var getById = function(index) {        
        return itemsArr[index];
    }

    var getByItemNo = function(itemNo) {
        for (var i = 0; i < itemsArr.length; i++) {
             if (itemsArr[i].itemNo === itemNo) {
                return itemsArr[i];
            }
        }

        return null;
    }

    var getIndexByItemNo = function(itemNo) {        
        for (var i = 0; i < itemsArr.length; i++) {
            if (itemsArr[i].itemNo === itemNo) {
                return i;
            }
        }
    }

    var CheckItemNoExist = function(itemNo) {                
        for (var i = 0; i < itemsArr.length; i++) {            
            if (itemsArr[i].itemNo === itemNo) {                
                return true;
            }            
        }        
        return false;
    }
    
    var add = function(item) {        
        itemsArr.push(item);
    }

    var update = function(index, item) {
        itemsArr[index] = item;
    }

    var updateItemSoh = function(index, qty) {
        console.log("1 items.updateItemSoh index: " + index);
        console.log("2 items.updateItemSoh Qty: " + qty);
        itemsArr[index].itemSoh = qty;
        console.log("3 items.updateItemSoh after upd: " + itemsArr[index].itemSoh);
    }

    var removeAll = function() {
        itemsArr = [];
    }

    var removeByID = function(index) {
        itemsArr.splice(index, 1);
    }

    var load = function (itemsPlain) {         
        for (var i = 0; i < itemsPlain.length; i++) {
            itemsArr.push(new Item(itemsPlain[i]))
        }
    }

    return {
        getAll: getAll,
        getById: getById,
        getByItemNo: getByItemNo,  
        getIndexByItemNo: getIndexByItemNo,   
        CheckItemNoExist: CheckItemNoExist,   
        add: add,
        update: update,
        updateItemSoh : updateItemSoh,
        removeAll: removeAll,
        removeByID: removeByID,
        load: load        
    }
})