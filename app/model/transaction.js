// Shared Item Constructor
app.factory("Transaction", function(){
    function Transaction(plainObject) {
        this.transactionItemNo = plainObject.transactionItemNo;        
        this.transactionItemDesc = plainObject.transactionItemDesc;
        this.transactionType = plainObject.transactionType;
        this.transactionDate = plainObject.transactionDate;
        this.transactionUom = plainObject.transactionUom;
        this.transactionQty = plainObject.transactionQty;        
    };

    return Transaction;
});