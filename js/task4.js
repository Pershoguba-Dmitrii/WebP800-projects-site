const myMenuBtn = document.querySelector('.header-hidden');
const myMenu = document.querySelector('.header-hidden-menu');

myMenu.style.top = '-50%';
myMenu.innerHTML = `
  <ul>
  <li><a href="#">discover</a></li>
  <li><a href="#">creators</a></li>
  <li><a href="#">sell</a></li>
  <li><a href="#">stats</a></li>
  <li><a href="#">search</a></li>
  <li><a href="#">connect wallet</a></li>
  </ul>
`;


myMenuBtn.addEventListener('click', () => {
  myMenu.style.top = '0%';
  myMenu.style.display = 'block';
});

document.addEventListener('mouseup', (event) => {
  if (event.target.className != 'header-hidden-menu')
    myMenu.style.top = "-50%";
});
