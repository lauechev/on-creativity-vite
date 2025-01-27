import './scss/estilos.scss';
import pages from './paginas';

let pageNumber = 0;

const nextTag = document.querySelector<SVGElement>('footer svg.next');
const previousTag = document.querySelector<SVGElement>('footer svg.prev');
const randomTag = document.querySelector<SVGElement>('footer svg.random');

const quoteTag = document.querySelector<HTMLParagraphElement>('section div p.quote-text');
const authorTag = document.querySelector<HTMLParagraphElement>('section div p.author');

const circleTag = document.querySelector<HTMLDivElement>('section div.circle');
const bodyTag = document.querySelector<HTMLBodyElement>('body');
const footerTag = document.querySelector<HTMLDivElement>('footer div.buttons');

// make next function to increase the pageNumber
const next = (): void => {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

// make previous function to decrease page number
const previous = (): void => {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
};

// pick a random slide
const random = (): void => {
  pageNumber = Math.floor(Math.random() * pages.length);

  updateSection();
};

// update section content and style
const updateSection = (): void => {
  if (quoteTag && authorTag && circleTag && bodyTag && nextTag && previousTag && randomTag && footerTag) {
    quoteTag.innerHTML = pages[pageNumber].quote;
    authorTag.innerHTML = pages[pageNumber].author;

    circleTag.style.backgroundColor = pages[pageNumber].color;
    bodyTag.style.borderColor = pages[pageNumber].color;

    nextTag.style.color = pages[pageNumber].color;
    previousTag.style.color = pages[pageNumber].color;
    randomTag.style.color = pages[pageNumber].color;
    footerTag.style.borderColor = pages[pageNumber].color;
  }
};

// when clicking next tag, run this
if (nextTag) nextTag.addEventListener('click', next);

// when clicking previous tag, run this
if (previousTag) previousTag.addEventListener('click', previous);

// on click of random tag, run this
if (randomTag) randomTag.addEventListener('click', random);

//when user presses a key, check for arrow left or right and next or prev accordingly

document.addEventListener('keyup', (event) => {
  //if the key being pressed is ArrowRight
  if (event.key === 'ArrowRight') {
    next();
  }

  //if the key being pressed is ArrowLeft
  else if (event.key === 'ArrowLeft') {
    previous();
  }
});
