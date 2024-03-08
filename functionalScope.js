function outerFunction() {
    var outerVariable = "I'm in the outer function";

    function innerFunction() {
        var innerVariable = "I'm in the inner function";
        console.log(innerVariable); // Accessible within innerFunction
        console.log(outerVariable); // Accessible within innerFunction
    }

    innerFunction(); // Call inner function
    console.log(outerVariable); // Accessible within outerFunction
    console.log(innerVariable); // Throws a ReferenceError: innerVariable is not defined
}

outerFunction(); // Call outer function