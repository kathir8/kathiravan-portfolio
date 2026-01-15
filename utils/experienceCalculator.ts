export const RESUME_NAME = 'Kathiravan_Senior_Software_Engineer';
// Start date: July 15, 2020
export const START_DATE = new Date('2020-07-15');

export const calculateExperience = (numericOnly?: boolean): string => {
  const now = new Date();
  let years = now.getFullYear() - START_DATE.getFullYear();
  let months = now.getMonth() - START_DATE.getMonth();

  // Adjust for partial years (if current month is before start month)
  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust for partial months (if current month is before start day)
  if (now.getDate() < START_DATE.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  if (numericOnly) {
    if (months === 0) {
      return `${years}`;
    }
    return `${years}.${months}`;
  }

  if (months === 11) {
    return `nearly ${years + 1} years`;
  }

  if (months === 0) {
    return `${years} years`;
  }

  return `${years}.${months} years`;
};