// Shared User Constructor
app.factory("User", function(){
    function User(plainObject) {
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.role = plainObject.role;
        console.log("service: User role: " + this.role);
        this.catalogData = plainObject.catalogData;        
    };

    return User;
});