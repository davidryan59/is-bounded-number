var isBoundedNumber = function isBoundedNumber( input, limit ) {
  // Check an input is numeric and bounded
  // Default bound is a bit lower than Number.MAX_SAFE_INTEGER, which is approx 9e15

  // This fails for non-numeric, and also Infinity and NaN
  if (!Number.isFinite(input)) return false;

  // This fails for numbers outside of the bounds specified
  if (Math.abs(input) > (limit || 1e15)) return false;

  // Otherwise input is a bounded number, return true
  return true;
};

module.exports = isBoundedNumber;
