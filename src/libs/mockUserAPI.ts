export const getUserData = async () => {
  return new Promise<{ name: string }>((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Abdul Moiz' });
    }, 1000);
  });
};
