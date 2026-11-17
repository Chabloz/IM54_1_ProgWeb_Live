export async function loadJson(url) {
  const response = await fetch(url);
  return response.json();
}

export function loadJsonUrls(urls) {
  return Promise.all(urls.map(loadJson));
}
