export const readTime = (date) => {

  const splitDate = date.split("T")[0].split("-");
  const day = splitDate[2];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[splitDate[1] - 1];
  const year = splitDate[0];
  const fullDate = `${month} ${day}, ${year}`

  return {
    day,
    month,
    year,
    fullDate
  };
};
