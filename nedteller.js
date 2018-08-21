const container = document.querySelector('.buttons');
const output = document.getElementById('output_num');
const startbutton = document.querySelector('.startbutton');

container.addEventListener('click', function(event) {
    const element = event.target;

    if(element.nodeName == 'BUTTON'){
      const currentNumber = output.textContent;
      if (currentNumber==='0'){
        ocurrentNumber = element.textContent;
      } else {
        currentNumber = element.textContent;
      }

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
