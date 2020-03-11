export function youtubeSearchQueryGenerator(query) {
  return `https://www.youtube.com/results?search_query=${query.replace(
    / /g,
    "+"
  )}+1080p+trailer`;
}
