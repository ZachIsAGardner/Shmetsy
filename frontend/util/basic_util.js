export const count = (arr, val) => {
  let result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      result++;
    }
  }
  return result;
};
