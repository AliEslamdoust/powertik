// custom css shortcuts
const custom_shortcuts = [
  // ["className","property","property value"],
];

const custom_responsive = {
  xxl: "min-width:1280px",
  xl: "min-width:992px+max-width:1280px",
  lg: "min-width:768px+max-width:992px",
  md: "min-width:574px+max-width:786px",
  sm: "max-width:574px",
};

const css = "./styles/main.css"; // css url (just make sure the directory is set ok, powertik.js will make the file itself)
const index = "./index.html"; // index url or the file to watch url

module.exports = {
  cssURL: css,
  indexURL: index,
  shortcuts: custom_shortcuts,
  responsive: custom_responsive,
};
