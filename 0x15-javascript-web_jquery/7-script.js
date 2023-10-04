$('document').ready(() => {
  const tag = $('DIV#character');
  $.get('https://swapi-api.hbtn.io/api/people/5/?format=json', (data) => {
    tag.text(data.name);
  });
});
