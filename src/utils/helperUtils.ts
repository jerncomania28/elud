const helperUtils = {
  convertToObjectKey: (key: string) => {
    const objectKey = key.trim().toLocaleLowerCase().split(' ').join('_');
    return objectKey;
  },
  convertObjectKeyToWord: (key: string) => {
    const word = key.trim().split('_').join(' ');
    return word;
  },
  formatNumberWithCommas: (x?: string | number) =>
    x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
};

export default helperUtils;
