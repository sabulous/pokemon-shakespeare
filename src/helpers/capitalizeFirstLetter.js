const capitalizeFirstLetter = (str) => {
  if (!str || str === "") return "";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

export default capitalizeFirstLetter;
