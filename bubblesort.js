function bubbleSort(array) {

    /* your code here */
    for (let i=0; i<array.length-1; i++){
        for  (let j=0;  j<array.length; j++)
        { console.log('before if', array, i, j)
            if (array[j]>array[j+1]){
                let temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp   
                console.log('array',  array)  
                   }  
    }

}
return array}

console.log(bubbleSort([2,7,4,3,8]))
