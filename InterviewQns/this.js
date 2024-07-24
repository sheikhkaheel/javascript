let objWithFn = {
    name: "kaheel",
    func: function () {
        var self = this;
        console.log("Output of OuterFuntion for this.name = ", this.name);
        console.log("Output of OuterFuntion for self.name = ", self.name);
        (function () {
            console.log("Output of Inner Function for this.name = ", this.name);
            console.log("Output of Inner Function for this.name = ", self.name);
        }());
    }
}

objWithFn.func();