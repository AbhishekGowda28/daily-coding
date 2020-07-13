/*
    functionName:   palindrom
    return      :   palindrom list
    description :   the function check the right and left of the characters and later find the palindrom.
*/

/**
 *  PASS TEST CASE  :
 *  input           : ABCDCB, ABCDDC, IOMKILOLIKTCJIOPLLPO
 *  
 * FAIL TEST CASE   :
 *  input           : 12211, 01001122
 * 
 */

function palindrom(input) {

    var data = input.toString().split("");
    var palindromList = [];


    for (var i = 1; i < data.length - 1; i++) {
        var j, left, right, counter;

        if (data[i] == data[i + 1] && data[i] != data[i - 1]) {
            // conditions like  ABBA
            j = i + 1;
            left = i;
            right = j;
            counter = 2;
        } else {
            // condtion ABA
            j = i;
            left = i;
            right = j;
            counter = 1;
        }

        do {
            left--;
            right++;
            if ((data[left] != data[right] && counter > 1) || (left < 0) || (right > data.length)) {
                // counter += 2;
                var value = data;
                console.log("counter", counter);
                console.log("right", right);
                console.log("left", left);
                var deleteCount = counter;
                console.log("deleteCount", deleteCount);
                value = value.splice(left + 1, counter);
                value = value.join("");
                palindromList.push(value);
                break;
            }
            counter += 2;
        } while (data[left] == data[right]);
    }
    return palindromList;
}

export default palindrom