
app.factory("transactions", function(Transaction) {
    var transactionsArr = [];

    var getAll = function() {
        return transactionsArr;
    }

    var getById = function(index) {
        console.log("transactions service getById: " + transactionsArr[index]);
        return transactionsArr[index];
    }

    var getByValue = function(value) {
        console.log("transactions service getByValue: " + value);
        return transactionsArr.indexOf(value);
    }

    var add = function(transaction) {
        transactionsArr.push(transaction);
    }

    var update = function(index, transaction) {
        transactionsArr[index] = transaction;
    }

    var removeAll = function() {
        transactionsArr = [];
    }

    var removeByID = function(index) {
        transactionsArr.splice(index, 1);
    }

    var load = function (transactionsPlain) {         
        for (var i = 0; i < transactionsPlain.length; i++) {
            transactionsArr.push(new Transaction(transactionsPlain[i]))
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