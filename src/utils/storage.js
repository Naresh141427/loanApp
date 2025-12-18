export const getLocalData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error reading localStorage", error);
    return null;
  }
};

export const setLocalData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error writing localStorage", error);
  }
};

export const removeLocalData = (key) => {
  localStorage.removeItem(key);
};
