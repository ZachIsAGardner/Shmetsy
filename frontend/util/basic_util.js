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

export const timeify = (date) => {

  const splitDate = date.split("T")[0].split("-");
  const day = splitDate[2];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[splitDate[1] - 1];
  const year = splitDate[0];
  const fullDate = `${month} ${day}, ${year}`;

  return {
    day,
    month,
    year,
    fullDate
  };
};
