export function fetchReviews(number) {
  const url = `https://randomuser.me/api/?results=${number}`;

  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(`Error fetch review data`, err));
}
