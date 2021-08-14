var arr = [-1,45,-65,-97,90,-63,12,-76,98]
var positive = [];
var negative = [];
for (var i=0; i<arr.length; ++i){
    if (arr[i]>0){
        positive.push(arr[i])
    }
    else{
        negative.push(arr[i])
    }
}
console.log(positive)
console.log(negative)