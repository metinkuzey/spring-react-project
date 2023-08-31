// Get the current year
const currentYear = new Date().getFullYear();

// Generate an array of the last 10 years
export const getAvailableYears = Array.from(
  { length: 30 },
  (_, index) => currentYear - index
);
