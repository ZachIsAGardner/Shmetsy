export const count = (arr, val) => {
  let result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      result++;
    }
  }
  return result;
};

export const moneyify = (number) => {
  let result = '';
  result += number.toString();
  let dollars = result.split(".")[0];
  let cents = result.split(".")[1] || '';
  cents = (cents + "00").slice(0, 2);

  return `$${dollars}.${cents}`;
};
