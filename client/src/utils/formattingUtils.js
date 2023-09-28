/**
 * Formats a date string to the format "YYYY-MM-DD".
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string, or an empty string if the input is invalid or empty.
 */
export const formatDate = (dateString) => {
  if (!dateString) return '' // Handle empty string input

  const date = new Date(dateString)

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string')
  }

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param {string} input - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const capitalizeFirstLetters = (input) => {
  // Check if the input is valid
  if (typeof input !== 'string' || !input.trim()) {
    return ''
  }
  // Using regex to capitalize the first letter of each word
  return input.replace(/\b\w/g, (match) => match.toUpperCase())
}

// Second option for capitalizeFirstLetters function:
// 
// export const capitalizeFirstLetters = (string) => {
//   string = string + ''

//   if (!string) return ''

//   return string
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ')
// }
