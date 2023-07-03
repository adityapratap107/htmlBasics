const person = {
    firstName: "John",
    lastName : "Smith",
    id       : 1122,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };    