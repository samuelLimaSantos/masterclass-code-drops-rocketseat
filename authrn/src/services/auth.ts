interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'sducghsdhcousdhcsoduhcsdoich',
        user: {
          name: 'Samuel_santos',
          email: 'samuel@gmail.com.br',
        },
      });
    }, 2000);
  });
}
