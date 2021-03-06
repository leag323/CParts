// Shared Item Constructor
app.factory("Item", function(){
    function Item(plainObject) {
        this.itemNo = plainObject.itemNo;        
        this.itemDesc = plainObject.itemDesc;
        this.itemUom = plainObject.itemUom;
        this.itemMinQty = plainObject.itemMinQty;
        this.itemMaxQty = plainObject.itemMaxQty;
        this.itemLocation = plainObject.itemLocation;        
        this.itemSoh = plainObject.itemSoh;        
    };

    return Item;
});