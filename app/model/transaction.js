// Shared Item Constructor
app.factory("Transaction", function(){
    function Transaction(plainObject) {                    
        this.transactionType = plainObject.transactionType;
        this.transactionItemNo = plainObject.transactionItemNo;    
        this.transactionDate = plainObject.transactionDate;        
        this.transactionQty = plainObject.transactionQty;        
    };

    return Transaction;
});