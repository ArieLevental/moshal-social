// Helper function to format the date as "yyyy-MM-dd"
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Helper function to capitalize first letter of each word
export const capitalizeFirstLetters = (string) => {
  // convert to string
  string = string + "";
  // If string is empty or not a string, return an empty string
  if (!string) return "";

  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
