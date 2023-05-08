$('document').ready(() => {
  $('INPUT#btn_translate').click(() => {
    const tag = $('DIV#hello');
    const lang = $('INPUT#language_code').val();
    const url = 'https://www.fourtonfish.com/hellosalut/?lang=' + lang;
    const settings = {
      method: 'GET',
      success: (data, stat, xml) => {
        tag.text(data.hello);
      }
    };
    $.ajax(url, settings);
  });
  $('INPUT#language_code').keypress((event) => {
    if (event.which == 13) {
      $('INPUT#btn_translate').trigger('click');
    }
  });
});
