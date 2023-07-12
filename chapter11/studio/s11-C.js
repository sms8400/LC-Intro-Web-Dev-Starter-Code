function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  
  
  
  
  //Sample arrays for testing:
  let nums1 = [5, 10, 2, 42];
  let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
  let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
  
  //Sort each array in ascending order.
  nums1.sort(function(a,b) {return a-b});
  console.log(nums1);
  
  //Sort each array in decending order.
  
  nums2.sort(function(b,a) {return a-b});
  console.log(nums2);
  
  nums3.sort(function(a,b){return b-a;
  });
  console.log(nums3);
  
  console.log("\n")
  console.log('Bonus\n');
  
  let nums1a = [5, 10, 2, 42];
  let nums2b= [-2, 0, -10, -44, 5, 3, 0, 3];
  let nums3c= [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
  
  function sortNumsRec(arr, sorted=[]){
    if(arr.length===0){
      return sorted;
    }
    let min= findMinValue(arr);
    sorted.push(min);
    arr.splice(arr.indexOf(min), 1);
    return sortNumsRec(arr, sorted);
  }
  console.log(sortNumsRec(nums1a));
  console.log(sortNumsRec(nums2b));
  console.log(sortNumsRec(nums3c));