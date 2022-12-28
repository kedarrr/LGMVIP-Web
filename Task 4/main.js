let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('button'));

console.log(buttons);

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText)
        {
            case 'DEL':
            {
                if(screen.innerText)
                {
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            }
            case 'AC':
            {
                screen.innerHTML='';
                break;
            }
            case '=':
            {
                try{
                    screen.innerText = eval(screen.innerText);
                }
                catch{
                    screen.innerText = 'Error';
                }
                break;
            }
            default:
            {
                screen.innerText += e.target.innerText;
            }
        }
    })
})