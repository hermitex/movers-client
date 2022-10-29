function numberFormatter(value, options) {
  return new Intl.NumberFormat('en-US', { ...options }).format(value);
}

export default numberFormatter;
