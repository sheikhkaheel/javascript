function OuterFun(){
    let num = 2;
    console.log(this);
    function InnerFun(){
        let num2 = 3;
        console.log(num, " ", num2); 
        console.log(this);
    }
    return InnerFun;
}

const Inner = OuterFun();
Inner();


// Know about different use debug console by clicking on the F5