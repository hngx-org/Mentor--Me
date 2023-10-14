export default function formatDate(inputDateString: string) {
  const inputDate = new Date(inputDateString);
  const month = inputDate.getMonth();
  const year = inputDate.getFullYear();
  return `${month}, ${year}`;
}
