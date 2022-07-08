const links = document.querySelectorAll('.header-menu a');

function mark(link) {
  const url = location.href;
  const href = link.href;
  
  if (url.includes(href)) {
    link.classList.add('ativo')
  }
}

links.forEach(mark);

// ACTIVE ITEMS OF SECURES

const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);

  if (element) {
    element.checked = true;
  } 
}

parameters.forEach(activeProduct);


// OCULT THE P's

const perguntas = document.querySelectorAll('.perguntas-box button');

function addClass(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('show');
  const show = resposta.classList.contains('show');
  pergunta.setAttribute('aria-expanded', show);
  
}

// WHEN WE CLICK IN SOME PERGUNTAS ITEMS WE WILL ACTIVATE THE addClass FUNCTION
function showQ(pergunta) {
  pergunta.addEventListener('click', addClass);
}

perguntas.forEach(showQ);


// GALLERY

const gallery = document.querySelectorAll('.magic-images img');
const galleryContainer = document.querySelector('.magic-images');

function changeImage(event) {
  
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 940px)').matches;
  if (media) {
    galleryContainer.prepend(img);
  }
}
function eventGallery(img) {
  img.addEventListener('click', changeImage);
}
gallery.forEach(eventGallery);



