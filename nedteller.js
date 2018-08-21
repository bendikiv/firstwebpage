const container = document.querySelector('.buttons');
const output = document.getElementById('output_num');
const startbutton = document.querySelector('.startbutton');

container.addEventListener('click', function(event) {
    const element = event.target;

    if(element.nodeName == 'BUTTON'){
      let currentNumber = output.textContent;
      let clickedNumber = element.textContent;
      if (currentNumber==='0'){
        clickedNumber = element.textContent;
        console.log(currentNumber);
      } else {
        clickedNumber = element.textContent;
      }
      output.textContent = clickedNumber;
    }
});

startbutton.addEventListener('click', function(event) {
  const id = setInterval(() => countDown(id), 1000);
});

const countDown = (id) => {
  let timeLeft = output.textContent;
  if(timeLeft>0){
    timeLeft--;
    output.textContent = timeLeft;
  }
  else {
    clearInterval(id);
  }
}
