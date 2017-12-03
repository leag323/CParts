// Shared Item Constructor
app.factory("Transaction", function(){
    function Transaction(plainObject) {
        this.transactionItemNo = plainObject.transactionItemNo;                
        this.transactionType = plainObject.transactionType;
        this.transactionDate = plainObject.transactionDate;        
        this.transactionQty = plainObject.transactionQty;        
    };

    return Transaction;
});