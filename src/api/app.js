const api = 'http://localhost:8080/';

export async function requestProjects() {
  const response = await fetch(api)
  const data = await response.json();
  return data;
} 