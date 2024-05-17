const gridJs = document.querySelectorAll('.grid-slot');
const bodyJs = document.querySelector('body');

for (let i = 0; i < gridJs.length; i++) {
  if (i === 0) {
    gridJs[i].addEventListener('click', () => {
      bodyJs.style.backgroundImage = "url('../materials/images/content-images/Ainz_fullscreen.jpg')";
      bodyJs.style.backgroundSize = "cover";
      bodyJs.style.backgroundPositionY = "0vh";
      bodyJs.style.backgroundPositionY = "0vh";
      check = false;
    });
  } else if (i === 1) {
    gridJs[i].addEventListener('click', () => {
      bodyJs.style.backgroundImage = "url('../materials/images/content-images/Albedo_fullscreen.jpg')";
      bodyJs.style.backgroundSize = "cover";
      bodyJs.style.backgroundPositionX = "0vh";
      bodyJs.style.backgroundPositionY = "0vh";
      check = false;
    });
  } else if (i === 2) {
    gridJs[i].addEventListener('click', () => {
      bodyJs.style.backgroundImage = "url('../materials/images/content-images/Shalltear_fullscreen.jpg')";
      bodyJs.style.backgroundSize = "cover";
      bodyJs.style.backgroundPositionX = "0vh";
      bodyJs.style.backgroundPositionY = "0vh";
      check = false;
    });
  } else if (i === 3) {
    gridJs[i].addEventListener('click', () => {
      bodyJs.style.backgroundImage = "url('../materials/images/content-images/Entoma_fullscreen.jpg')";
      bodyJs.style.backgroundSize = "cover";
      bodyJs.style.backgroundPosition = "top";
      bodyJs.style.backgroundPositionX = "0vh";
      bodyJs.style.backgroundPositionY = "-20vh";
      check = false;
    });
  } else if (i === 4) {
    gridJs[i].addEventListener('click', () => {
      bodyJs.style.backgroundImage = "url('../materials/images/content-images/Lupus_regina_fullscreen.jpg')";
      bodyJs.style.backgroundSize = "cover";
      bodyJs.style.backgroundPositionY = "-80vh";
      check = false;
    });
  }
  else if (i == 5) {
    gridJs[i].addEventListener('click', () => {
      bodyJs.style.backgroundImage = "url('../materials/images/content-images/Naberal_Gamma_fullscreen.jpg')";
      bodyJs.style.backgroundSize = "cover";
      bodyJs.style.backgroundPositionX = "0vh";
      bodyJs.style.backgroundPositionY = "-10vh";
      check = false;
    });
  }
}