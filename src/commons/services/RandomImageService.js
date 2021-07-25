const ENDPOINT = 'https://picsum.photos/200';

export function getImage() {
  return new Promise((resolve, reject) => {
    fetch(ENDPOINT)
      .then(res => {
        if (res.ok) {
          resolve(res);
        }
        reject(false);
      })
      .catch(() => {
        reject(false);
      });
  });
}
