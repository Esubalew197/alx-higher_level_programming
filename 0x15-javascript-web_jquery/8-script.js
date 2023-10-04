$('document').ready(() => {
  const tag = $('UL#list_movies');
  $.get('https://swapi-api.hbtn.io/api/films/?format=json', (data) => {
    $.each(data.results, (i, obj) => {
      tag.append('<li>' + obj.title + '/li');
    });
  });
});
