import simpleDateFormat from 'date-fns/format';
import compareDateFormat from 'date-fns/distance_in_words_strict';

/**  
   * Convert the date to a concise format
   * @param {object} date to format
   * @returns {object} Object containing a short and long format representation of the date
   *
   **/
export const formatDate = (date) => {
  const today = new Date();
  const result = {
    short: simpleDateFormat(date, 'MMM Do, YYYY'),
    long: simpleDateFormat(date, 'MMM Do, YYYY h:mm a')
  };
  if (simpleDateFormat(date, 'M YYYY') === simpleDateFormat(today, 'M YYYY')) {
    const difference = compareDateFormat(date, today);
    result.short = difference.startsWith('0') ? '1 second ago' : `${difference} ago`;
  }
  return result;
};


export default formatDate;
