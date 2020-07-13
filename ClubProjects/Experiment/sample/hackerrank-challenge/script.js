function a(s,k){
    var data = 0;
    var counter=0, maxCounter = 0;
    for(var i=1; i<=s;i++){
        for(var j=i+1;j<=s;j++){
            var binary = (i.toString(2) & j.toString(2));
            binary = binary.toString(2);
            var value = parseInt(binary, 2);
            console.log(i,j,"value : ", value);
            if (parseInt(binary, 2)<k && value!=0) counter++;
        }
        console.log(i, j, " : ", counter);
        if (maxCounter < counter) {
            maxCounter = counter;
            data = i;
        }
        counter = 0;
    }
    console.log(data);
    return data;
}


function smallest(current) {
    previous = 0;
    if (current < previous)
        previous = current;
}