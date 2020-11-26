class Widget {
    constructor(func) {
        func(this.prepare())
    }

    prepare () {
        let core = document.createElement('DIV');
        let input = document.createElement('INPUT');
        let button = document.createElement('BUTTON');
        button.innerText = "Go to result";
        input.setAttribute('placeholder', 'Enter your name');
        let result = document.createElement('SPAN');
        core.appendChild(input);
        core.appendChild(button);
        core.appendChild(result);
        core.classList.add('widget');
        core.setAttribute('id', Date.now().toString());
        document.body.appendChild(core);
        return core;
    }
}

new Widget((block) => {
    
    let input =  block.querySelector('input');
    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';

    button.addEventListener('click', () => {
        result.innerText = `RESULT: hello, ${input.value}`; 
    });
});

new Widget((block) => {
    const nowYear = 2020;
    
    let input =  block.querySelector('input');
    input.setAttribute('placeholder', 'Enter your year of birth');
    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';

    button.addEventListener('click', () => {
        if(nowYear < input.value) {
            result.innerText = 'RESULT: ' + 'You weren`t born yet HEHEHE'; 
        } else {
            input.value = nowYear - input.value;
            result.innerText = `RESULT: you are ${input.value} years old `; 
        }
    });
});

new Widget((block) => {
    let input =  block.querySelector('input');
    input.setAttribute('placeholder', 'Enter side of the square');
    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';

    button.addEventListener('click', () => {
        result.innerText = `RESULT: perimeter of a square: ${input.value * 4}`; 
    });
});

new Widget((block) => {
    let input =  block.querySelector('input');
    input.setAttribute('placeholder', 'Enter circle radius');
    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';

    button.addEventListener('click', () => {
        result.innerText = `RESULT: area of a circle: ${Math.pow(input.value,2) * Math.PI}`; 
    });
});

new Widget((block) => {

    let inputTwo = document.createElement('input');
    inputTwo.setAttribute('placeholder', 'Enter the desired time(hourse)');
    block.appendChild(inputTwo);
    inputTwo.style.float = 'left';

    let input =  block.querySelector('input');
    input.setAttribute('placeholder', 'Enter distance to point(km)');
    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';

    button.addEventListener('click', () => {
        result.innerText = `RESULT: ${input.value*inputTwo.value} speed`; 
    });
});

new Widget((block) => {
    let input =  block.querySelector('input');
    input.setAttribute('placeholder', 'Enter amount dollars');
    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';

    const euroExchangeRate = 0.84;

    button.addEventListener('click', () => {
        result.innerText = `RESULT: ${input.value * euroExchangeRate} Euro`; 
    });
});

new Widget((block) => {
    let input =  block.querySelector('input');
    input.setAttribute('placeholder', 'Enter flash drive volume(gb)');
    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';
    const fileSize = 820;
    let countFiles = 0;

    const numMegbytOnGigByte = 1000;
    button.addEventListener('click', () => {
        input.value =  input.value * numMegbytOnGigByte;
        while(input.value >= fileSize) {
            input.value -= fileSize;
            countFiles++;
        }
        result.innerText = `RESULT: count files ${countFiles}`;
        input.value = '';
        countFiles = 0;
    });
});

new Widget((block) => {
    
    let inputTwo = document.createElement('input');
    inputTwo.setAttribute('placeholder', 'Enter price of chocolate');
    block.appendChild(inputTwo);
    inputTwo.style.float = 'left';

    let input =  block.querySelector('input');
    input.setAttribute('placeholder', 'Enter amount money');

    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';

    let count = 0;
    button.addEventListener('click', () => {
        while(input.value >= inputTwo.value) {
            input.value -= inputTwo.value;
            count++
        }
        result.innerText = `RESULT: count chocolates ${count}`;

        count = 0;
        input.value = '';
        inputTwo.value = '';
    });
});

new Widget((block) => {
    let input =  block.querySelector('input');
    input.setAttribute('placeholder', 'Enter three-digit number');
    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';

    button.addEventListener('click', () => {
        let tmp = '';

        for(let i = input.value.length-1; i > -1; i--) {
            tmp += input.value[i];
        }

        result.innerText = `RESULT: ${tmp}`;
    });
});

new Widget((block) => {
    let input =  block.querySelector('input');
    input.setAttribute('placeholder', 'Enter integer');
    let result = block.querySelector('span');
    let button = block.querySelector('button');

    result.innerText = 'RESULT:';

    button.addEventListener('click', () => {
        const even = n => !(n % 2);

        if(even(input.value)) {
            result.innerText = `RESULT: even`;
        } else {
            result.innerText = `RESULT: uneven`;
        }
    });
});