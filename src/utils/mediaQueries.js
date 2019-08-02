const sizes = {
  xs: "576px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1600px"
};
export default {
  up(size) {
    return `@media (min-width: ${sizes[size]})`;
  },
  down(size) {
    return `@media (max-width: ${sizes[size]})`;
  }
};
