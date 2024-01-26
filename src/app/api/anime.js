const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
);
const anime = await response.json();
console.log(anime);

export default anime;
