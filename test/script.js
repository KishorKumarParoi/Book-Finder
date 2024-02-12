console.log('kkp');
let input = document.getElementById('input');
let defaultText = document.getElementById('default');
let debounceText = document.getElementById('debounce');
// let btn = document.getElementById('btn');
let throttleText = document.getElementById('throttle');


// const updateDebounce = debounce(text => {
//     debounceText.textContent = `Debounce : ${text}`;
// }, 3000);

// input.addEventListener('input', (e) => {
//     console.log(e.target.value);
//     defaultText.textContent = `Default : ${e.target.value}`;
//     updateDebounce(e.target.value);
// })

// function debounce(cb, delay = 100) {
//     console.log(cb);
//     console.log(delay);
//     let timeoutId;

//     return (...args) => {
//         console.log(args);
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             cb(...args);
//         }, delay);
//     }
// }

const updateDebounce = debounce(text => {
    debounceText.textContent = `Debounce: ${text}`;
}, 5000);

input.addEventListener('input', (e) => {
    defaultText.textContent = `Default: ${e.target.value} `;
    updateDebounce(e.target.value);
    updateThrottle(e.target.value);
})

function debounce(cb, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

const updateThrottle = Throttle(text => {
    throttleText.textContent = `Throttle: ${text} `;
}, 1000);

function Throttle(cb, delay) {
    let flag = false;
    return (...args) => {
        if (!flag) {
            cb(...args);
            flag = true;
            setTimeout(() => {
                flag = false;
            }, delay);
        }
    }
}

