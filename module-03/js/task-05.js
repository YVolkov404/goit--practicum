//** Поверніть об'єктб в якому вказано кількість тегів.
// Очікуваний результат 
// {js: 3, nodejs: 3, html: 2, css: 2, react: 2} 
// */

const tweets = [
    {id: '000', likes: 5, tags: ['js', 'nodejs']},
    {id: '000', likes: 10, tags: ['html', 'css']},
    {id: '000', likes: 1, tags: ['html', 'js', 'nodejs']},
    {id: '000', likes: 7, tags: ['css', 'react']},
    {id: '000', likes: 4, tags: ['js', 'nodejs', 'react']}
]

// const array = function (tweets) {
//   let newArr = [];

//   for (const item of tweets) {
//     const { tags } = item;
//     newArr.push(...tags);
//   }
// }

// array(tweets);

// ? OR using flatMap()

const array = tweets.flatMap(el => el.tags);


const object = function (array) {
  let js = 0;
  let react = 0;
  let html = 0;
  let css = 0;
  let nodejs = 0;

  for (const el of array) {
    if (el === 'js') {
      js += 1;
    } else if (el === 'react') {
      react += 1;
    } else if (el === 'html') {
      html += 1;
    } else if (el === 'css') {
      css += 1;
    } else {
      nodejs += 1;
    }
  }

  return {
    js,
    react,
    html,
    css,
    nodejs,
  };
};

console.log(object(array));