// Shared Item Constructor
app.factory("Order", function(){
    function Item(plainObject) {
        this.orderNo = plainObject.orderNo;        
        this.orderItemNo = plainObject.orderItemNo;
        this.orderQty = plainObject.orderQty;
        this.issueQty = plainObject.issueQty;
        this.requiredDate = plainObject.requiredDate;
        this.itemLocation = plainObject.itemLocation;        
        this.orderStatus = plainObject.orderStatus;        
    };

    return Item;
});