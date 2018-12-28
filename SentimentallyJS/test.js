function y() {
    console.log(x);
    var x = 10;
    console.log(x);
    if (x > 5) {
        var x = 2;
        console.log('if: ' + x);
    }
    console.log('outside: ' + x);
}


function z() {
    // console.log(x);
    let x = 10;
    console.log(x);
    if (x > 5) {
        let x = 2;
        console.log('if: ' + x);
    }
    console.log('outside: ' + x);
}

var x = 11;

y();
z();