export const getConfig = () => {
  // const prod = process.env.NODE_ENV === 'production';

  return {
    // SERVER_URL: process.env.SERVER_URL : 'http://localhost:1337',
    SERVER_URL: process.env. NEXT_PUBLIC_SERVER_URL,
    LOCAL_SERVER_URL: process.env.NEXT_PUBLIC_LOCAL_SERVER_URL,
  };
};
