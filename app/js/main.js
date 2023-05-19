// Шаг 4: Компиляция шаблона
const templateSource = document.getElementById('my-template').innerHTML;
const template = Handlebars.compile(templateSource);

// Шаг 5: Подготовка данных
const data = {
  logo:"BTS",
  Biography:'Biography',
  Members:'Members',
  Creativity:'Creativity',
  Links:'Links',
  spotify:"https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
  instagram:'https://www.instagram.com/bts.bighitofficial/',
  twitter:"https://twitter.com/bts_twt",
  facebook:"https://www.facebook.com/bangtan.official"
};

// Шаг 6: Рендеринг шаблона
const renderedHtml = template(data);

// Шаг 7: Вставка результата
document.getElementById('output').innerHTML = renderedHtml;