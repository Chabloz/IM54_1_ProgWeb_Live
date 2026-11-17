fetch('https://swapi.dev/api/films/')
  // .then(response => { return response.json(); })
  .then(response => response.json()) // shortcut
  .then(data => {
    console.log(data);
  })
