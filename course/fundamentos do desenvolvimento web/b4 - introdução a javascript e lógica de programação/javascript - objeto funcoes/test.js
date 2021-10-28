function greatestNum(value) {
    const arr = value;
    console.log(arr);
    let greater;
    let less;
    let iPlus;
    let i = 0;

    for (index = 0; index <= arr.length; index += 1) {
      iPlus = arr[i + 1]

      while (arr.length >= iPlus) {

        if (arr[i] > iPlus) {
          greater = arr[i];
          less = arr[iPlus]
          arr.splice(arr.indexOf(less), 1);
          console.log(arr);
          console.log(greater, less, `passei, só que não`);
        } else if (arr[i] < iPlus) {
          greater = arr[iPlus]
          less = arr[i];
          arr.splice(arr.indexOf(less), 1);
          console.log(arr);
          console.log(greater, less, `travei`);
        } else if (arr[i] === iPlus) {
          console.log(greater, less);
          greater = arr[i];
          less = arr[iPlus]
          arr.splice(arr.indexOf(less), 1);
          console.log(arr, `OK`);
          console.log(greater);
        }

        i += 1;
      }
    }

    console.log(greater);
  }
  
  let test = [2, 2, 4, -6, 7, 10, 0, -3, 76, -5, -78, 4, -4, 98];
  greatestNum(test)