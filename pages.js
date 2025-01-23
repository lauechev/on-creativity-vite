// data holding which page we're on
let pageNumber = 0;

//content for these pages
const pages = [
  {
    quote:
      '"The ability to look deeply is the root of creativity. To see past the ordinary and mundane and get to what might otherwise be invisible."',
    author: '- Rick Rubin',
    color: '#d8a9fc'
  },
  {
    quote:
      '"So this, I believe, is the central question upon which all creative living hinges: Do you have the courage to bring forth the treasures that are hidden within you?"',
    author: '- Elizabeth Gilbert',
    color: '#98b57b'
  },
  {
    quote:
      '"Creativity requires faith. Faith requires that we relinquish control."',
    author: '- Julia Cameron',
    color: '#f5ad51'
  },
  {
    quote: `"To live a creative life, we must lose our fear of being wrong"`,
    author: '- Joseph Chilton',
    color: '#ff82a8'
  },
  {
    quote: `"Imagination is more important than knowledge"`,
    author: '- Albert Einstein',
    color: '#6b9fff'
  }
];

// pick relevant tags
const nextTag = document.querySelector('footer svg.next');
const previousTag = document.querySelector('footer svg.prev');
const randomTag = document.querySelector('footer svg.random');

const quoteTag = document.querySelector('section div p.quote-text');
const authorTag = document.querySelector('section div p.author');

const circleTag = document.querySelector('section div.circle');
const bodyTag = document.querySelector('body');
const footerTag = document.querySelector('footer div.buttons');

// make next function to increase the pageNumber
const next = function () {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

// make previous function to decrease page number
const previous = function () {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
};

// pick a random slide
const random = function () {
  pageNumber = Math.floor(Math.random() * pages.length);

  updateSection();
};

// update section content and style
const updateSection = function () {
  quoteTag.innerHTML = pages[pageNumber].quote;
  authorTag.innerHTML = pages[pageNumber].author;

  circleTag.style.backgroundColor = pages[pageNumber].color;
  bodyTag.style.borderColor = pages[pageNumber].color;

  nextTag.style.color = pages[pageNumber].color;
  previousTag.style.color = pages[pageNumber].color;
  randomTag.style.color = pages[pageNumber].color;
  footerTag.style.borderColor = pages[pageNumber].color;
};

// when clicking next tag, run this
nextTag.addEventListener('click', function () {
  next();
});

// when clicking previous tag, run this
previousTag.addEventListener('click', function () {
  previous();
});

// on click of random tag, run this
randomTag.addEventListener('click', function () {
  random();
});

//when user presses a key, check for arrow left or right and next or prev accordingly

document.addEventListener('keyup', function (event) {
  console.log(event);

  //if the key being pressed is ArrowRight
  if (event.key === 'ArrowRight') {
    next();
  }
  //if the key being pressed is ArrowLeft
  else if (event.key === 'ArrowLeft') {
    previous();
  }
});
