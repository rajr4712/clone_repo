console.log(this);
//for all regular function calls, this points to window object.

var obj = {
    name: "lakshay",
    fun: function () {
        console.log("In obj:", this); // here this, represents the object "obj" itself.
        function proveThisThisAsWindowObject() {
            console.log("In proveThisThisAsWindowObject:", this); //this would be global "this" :p. Tricky!
        }
        proveThisThisAsWindowObject();
    }
}

obj.fun();
