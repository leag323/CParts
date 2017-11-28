
app.factory("items", function(Item) {
    var itemsArr = [];

    function getAll() {
        return itemsArr;
    }

    function getById(index) {
        return itemsArr[index];
    }

    function add(item) {
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

    function load(itemsPlain) {         
        for (var i = 0; i < itemsPlain.length; i++) {
            itemsArr.push(new Item(itemsPlain[i]))
        }
    }

    return {
        getAll: getAll,
        getById: getById,
        add: add,
        update: update,
        removeAll: removeAll,
        removeByID: removeByID,
        load: load
    }
})