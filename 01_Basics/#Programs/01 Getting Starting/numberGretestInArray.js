arr = [3,2,4,6,8,9,7,1,3,6,2];
max = arr[0];
min = arr[0];
for (var i= 0; i <arr.length;i++){
    if (arr[i]>max){
        max=arr[i];
    }
    if (arr[i]<min){
        min=arr[i];
    }
}

console.log("max value : "+max, "min value : "+min);

