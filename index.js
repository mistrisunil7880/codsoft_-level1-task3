
document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const calcButtons = document.querySelectorAll('#calcu input[type="button"]');
    
  
    function dis(val) {
        result.value += val;
    }

   
    function clr() {
        result.value = '';
    }

    function solve() {
        try {
            let x = result.value;
            let y = math.evaluate(x);
            result.value = y;
        } catch (e) {
            result.value = 'Error';
        }
    }

    function handleInput(event) {
        const targetValue = event.target.value;
        if (/[0-9./*+\-]/.test(targetValue)) {
            dis(targetValue);
        } else if (targetValue === '=') {
            solve();
        } else if (targetValue === 'c') {
            clr();
        }
    }

    calcButtons.forEach(button => {
        button.addEventListener('click', handleInput);
    });

    document.addEventListener('keydown', event => {
        const key = event.key;
        if (/[0-9./*+\-=]/.test(key)) {
            event.preventDefault(); 
            handleInput({ target: { value: key } });
        } else if (key === 'Backspace') {
            event.preventDefault(); 
            result.value = result.value.slice(0, -1);
        } else if (key === 'Escape') {
            event.preventDefault(); 
            clr();
        }
    });
});
