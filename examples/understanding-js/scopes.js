let name = "Outer Name";

function functionName(name_arg) {
    let name = "Inner Name";
    console.log("THis is the name", name_arg);
    console.log(name);
    function letSome() {
        console.log("inner or outer : => ", name);
        console.log("this props", this);
        let someName = "InstideFunction";
        console.log({someName});
    }
    const that = {};
    letSome.apply(that);
    // console.log("checking outside", {someName});
    console.log("checking outside", ither);
    let ither;
}



functionName("argument");