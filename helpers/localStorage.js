const setItem = (name, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(name, value);
  }
};

const getItem = (name) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(name);
  }
};

export { setItem, getItem };
