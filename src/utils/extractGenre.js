export function getGenreText(category, genreId) {
  const genreDict = JSON.parse(localStorage.getItem(category));

  console.log(genreDict[genreId]);
  return genreDict[genreId] ? genreDict[genreId].name : "";
}
