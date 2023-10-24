/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
let n = nums2.length;
let last  = m+n-1
while(m>0 && n> 0){
    if(nums1[m-1]>nums2[n-1]){
        nums1[last] = nums1[m-1];
        m--
    }else{
        nums1[last] = nums2[n-1]
        n--;
    }
    last--;
}
while(n>0){
    nums1[last] = nums2[n-1];
    n--
    last--
}
//console.log(nums1);
let median ;

if(nums1.length%2 ===0){
return median  = (nums1[(nums1.length/2)-1 ] + nums1[nums1.length/2])/2;
}else{
   return median = nums1[Math.floor(nums1.length/2)]
}
};