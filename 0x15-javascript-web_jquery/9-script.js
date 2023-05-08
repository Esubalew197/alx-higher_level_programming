$('document').ready(() => {
  const tag = $('DIV#hello');
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', (data) => {
    tag.text(data.hello);
  });
});
