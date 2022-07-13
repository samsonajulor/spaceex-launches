/**
 * 
 * @param {string} text 
 * @param {number} maxLength 
 * @returns truncated string
 */
const truncate = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

export default truncate