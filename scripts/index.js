// We don't need to put all of our code in here if we add the defer flag in the HTML!!
// document.addEventListener('DOMContentLoaded', function() {
//   console.log(document.querySelector('form'));
// });

const form = document.querySelector('form');

form.addEventListener('submit', function () {
  event.preventDefault();

  const gifURL = form.querySelector('#gif-url').value;
  const comment = form.querySelector('#comment').value;

  const img = document.createElement('img');
  img.src = gifURL;

  const p = document.createElement('p');
  p.textContent = comment;

  const div = document.createElement('div');
  div.append(img, p);

  const posts = document.querySelector('.posts');
  posts.append(div);

  event.currentTarget.reset();
});