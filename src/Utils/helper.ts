
export function formatDate(date:Date) {
  const month = date.getMonth() + 1; // Months are zero based, so we add 1
  const day = date.getDate();
  const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year

  // Pad single digit month or day with leading zero
  const formattedMonth = month < 10 ? '0' + month : month;
  const formattedDay = day < 10 ? '0' + day : day;
    console.log(`${formattedMonth}/${formattedDay}/${year}`)
  return `${formattedMonth}/${formattedDay}/${year}`;
}