
app.factory("items", function(Item) {
    var itemsArr = [];

    var getAll = function() {
        return itemsArr;
    }

    var getById = function(index) {        
        return itemsArr[index];
    }

    var getByValue = function(value) {        
        return itemsArr.indexOf(value);
    }

    var add = function(item) {
        itemsArr.push(item);
    }

    var update = function(index, item) {
        itemsArr[index] = item;
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
        getByValue: getByValue,
        add: add,
        update: update,
        removeAll: removeAll,
        removeByID: removeByID,
        load: load
    }
})