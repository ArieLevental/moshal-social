/**
 * Formats a date string to the format "YYYY-MM-DD".
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (dateString) => {
  if (!dateString) return ''

  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param {string} string - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const capitalizeFirstLetters = (string) => {
  // convert to string
  string = string + ''

  if (!string) return ''

  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
