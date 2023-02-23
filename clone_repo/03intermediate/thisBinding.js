var lakshay = {
    name: "Lakshay",
    getName: function () {
        console.log(this.name);
    }
}

lakshay.getName();

var lakshay2 = {
    name: "Lakshay2"
}

// lakshay2.getName(); //Error

lakshay.getName.call(lakshay2); // calls directly
var lakshay2NameInfo = lakshay.getName.bind(lakshay2); //returns reference.
lakshay2NameInfo();
