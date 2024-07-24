let objWithFn = {
    name: "kaheel",
    func: function () {
        var self = this;
        console.log("Output of OuterFuntion for this.name = ", this.name);  // it point towards obj
        console.log("Output of OuterFuntion for self.name = ", self.name);  // this also points towards obj
        (function () {
            console.log("Output of Inner Function for this.name = ", this.name); // it points towards global obj
            console.log("Output of Inner Function for self.name = ", self.name); // it points towards obj
        }());
    }
}

objWithFn.func();