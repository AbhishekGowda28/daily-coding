function multipleOf(input) {
   return input % 5 === 0 || input % 3 === 0;
}

function problem1 () {
   let sum = 0;
   for(let counter=1; counter<1000; counter++){
      if(multiple(counter)){
            sum+=counter;
         }
   }
   return counter;
}

export { problem1 };
