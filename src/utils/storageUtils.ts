/* eslint-disable @typescript-eslint/no-explicit-any */
const storageUtils = {
  setItem: (currentUser: any) => {
    localStorage.setItem('CURRENT_USER', JSON.stringify(currentUser));
  },
  getItem: () => {
    const currentUser = localStorage.getItem('CURRENT_USER');
    return JSON.parse(currentUser as string);
  },
  clearStorage: () => localStorage.clear(),
};

export default storageUtils;
