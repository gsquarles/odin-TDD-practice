function analyzeArray(array){
    let object = {};
    const arrSum = array.reduce((prev,cur) => prev + cur, 0);
    const average = arrSum / array.length;
    object.average = average;

    //Find Min value
    const smallest = Math.min(...array);
    object.min = smallest;
    //Find Max Value in array
    const largest = Math.max(...array);
    object.max = largest;
    //Find length of array
    const length = array.length;
    object.length = length;
    return object
}

export default analyzeArray;