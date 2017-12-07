
app.factory("orders", function(Order) {
    var ordersArr = [];
    var counter = 45012005560;

    var getAll = function() {
        return ordersArr;
    }

    var getById = function(index) {        
        return ordersArr[index];
    }
    
    
    var add = function(order) {        
        ordersArr.push(order);
    }

    var update = function(index, order) {
        ordersArr[index] = order;
    }    

    var removeAll = function() {
        ordersArr = [];
    }

    var removeByID = function(index) {
        ordersArr.splice(index, 1);
    }

    var load = function (ordersPlain) {         
        for (var i = 0; i < ordersPlain.length; i++) {
            ordersArr.push(new Order(ordersPlain[i]))
        }
    }

    var getNewPoNumber = function() {
        return ++counter;
    }

    /*
    var getNewPoNumber = (function() {
        //var counter = 45012005560;
        return function() 
                {return (counter = counter + 1)};
    }) ();
    */
    return {
        getAll: getAll,
        getById: getById,                       
        add: add,
        update: update,        
        removeAll: removeAll,
        removeByID: removeByID,
        load: load,
        getNewPoNumber: getNewPoNumber     
    }
})