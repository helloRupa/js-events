// We don't need to put all of our code in here if we add the defer flag in the HTML!!
// document.addEventListener('DOMContentLoaded', function() {
//   console.log(document.querySelector('form'));
// });

// Make the form add cat gifs and comments
const form = document.querySelector('form');

// How can we make this code friendlier to read? 
// What if we separated it out into functions?
form.addEventListener('submit', function () {
  event.preventDefault();

  // Why am I using so many consts? Why not let?
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

// Let's see how events bubble and capture (trickle)
// Grab all cat actions elements (section, h2, div, buttons)
const catActions = document.querySelectorAll('.actions, .actions *');

// UNCOMMENT TO SEE CAPTURING IN ACTION
// for (const element of catActions) {
//   element.addEventListener('click', function () {
//     console.log(`Capture says you clicked ${event.currentTarget.tagName }`);
//   }, true);
// }

// UNCOMMENT TO SEE BUBBLING IN ACTION
// for (const element of catActions) {
//   element.addEventListener('click', function () {
//     console.log(`Bubble says you clicked ${event.currentTarget.tagName }`);
//   });
// }

// WHAT IF YOU UNCOMMENT BOTH OF THE FOR LOOPS ABOVE??

// LET'S CHECK OUT event.stopPropagation()
const meow = document.querySelector('#meow');

// UNCOMMENT ALL OF THE CODE BELOW TO SEE WHAT HAPPENS
// meow.addEventListener('click', function () {
//   event.stopPropagation();
//   console.log('meow');
// });

// const actionsSection = document.querySelector('.actions');

// actionsSection.addEventListener('click', function () {
//   console.log('This is the actions section element speaking');
// });

// WHAT HAPPENS IF YOU COMMENT OUT event.stopPropagation() IN THE ABOVE CODE?
// WHAT HAPPENS IF YOU UNCOMMENT event.stopPropagation() BUT SET THE actionsSection LISTENER TO CAPTURE?
// WHY DO YOU THINK THAT HAPPENED?

// Event listeners and performance, let's make our cat actions buttons work
// with only one listener, oooohhh, aaaaaahhhh, such wow
const catActionsSection = document.querySelector('.actions');

catActionsSection.addEventListener('click', function () {
  switch(event.target.id) {
    case 'meow':
      console.log('meow');
      break;
    case 'purr':
      console.error('purr');
      break;
    case 'howl':
      alert('awooooo');
      break;
  }
});
