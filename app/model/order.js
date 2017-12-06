// Shared Item Constructor
app.factory("Order", function(){
    function Order(plainObject) {
        this.orderNo = plainObject.orderNo;        
        this.orderItemNo = plainObject.orderItemNo;
        this.orderQty = plainObject.orderQty;
        this.issueQty = plainObject.issueQty;
        this.requiredDate = new Date(plainObject.requiredDate);
        this.itemLocation = plainObject.itemLocation;        
        this.orderStatus = plainObject.orderStatus;        
    };

    return Order;
});