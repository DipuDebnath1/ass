function cubeNumber(number){
    if(typeof number !=='number'){
        return 'plese enter valid number type!';
    }
    else{
        number=Math.pow(number,3);
        return number;
    }
}

console.log(cubeNumber(3));




function matchFinder(string1, string2) {
    if(typeof string1 !=='string' || typeof string2 !=='string'){
        return 'please enter string type data!';
    }
    else{
        if(string1==string2.match(string1)){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(matchFinder('eb',' dipu deb'));



let arr=[20,30];

function sortMaker(arr) {
    if(arr[0]>=0 && arr[1]>=0){
        if(arr[0]<arr[1]){
            arr=arr.reverse();
            return arr;
        }
        else if(arr[0]==arr[1]){
            return 'equal';
        }
        else{
            return arr;
        }
    }
else{
    return "Invalid Number"

}
}
console.log(sortMaker(arr));



let object={
    street: 10,
    house: '',
    society: 'vxvb'    
}

function findAddress(obj) {
   let street=obj.street ||'--';
   let house=obj.house ||'--';
   let society=obj.society ||'--';
   let object=street+','+house+','+society;
   return object;
}
console.log(findAddress(object));




function canPay(changeArray, totalDue) {

    if(changeArray.length===0 || totalDue===undefined){
        return 'please enter your amount!';
    }
    else{
       sum=0;
       for(let i=0;i<changeArray.length;i++){
        let element=changeArray[i];
        sum=sum+element;
       } 
       if(sum>=totalDue){
        return true
       }
       else{
        return false;
       }
    }
}
let cash=[1,2,3,7];
let chips=12;
console.log(canPay(cash,chips));
