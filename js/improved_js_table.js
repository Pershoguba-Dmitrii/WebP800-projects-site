const inputs = document.querySelectorAll('input');
const totalPrice = document.querySelector('.totalPrice');
const priceList = document.querySelectorAll('.price')
const sumArr = [];
totalPrice.innerHTML = `Итого: ${0} рублей`;

inputs.forEach((element, index) => {
  sumArr.push(0);
  element.addEventListener('input', (e) => {
    //защита от нежелательных символов
    e.target.value = e.target.value.replace(/\D+/g, "");
    //расчёт суммы,
    // запись/обновление этой суммы в уникальную ячейку массива,
    // сумма всех значений массива и запись в результат на странице.     
    sumArr[index] = element.value * Number(priceList[index].innerHTML);
    let sum = 0;
    for (let i = 0; i < sumArr.length; i++) {
      sum += sumArr[i];
    }
    totalPrice.innerHTML = `Итого: ${sum} рублей`;
  })
});

