var arr = [1,45,65,97,90,63,12,76,98]
var even = [];
var odd = [];
for(var i=0; i<arr.length; ++i){
    if (arr[i]%2==0){
        even.push(arr[i])
    }
    else{
        odd.push(arr[i])
    } 

}
console.log(even)
console.log(odd)