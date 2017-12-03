// Shared User Constructor
app.factory("User", function(){
    function User(plainObject) {
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.role = plainObject.role;        
        this.catalogData = plainObject.catalogData;        
        this.transactionsData = plainObject.transactionsData;        
        console.log("service: User role: " + this.transactionsData);
    };

    return User;
});