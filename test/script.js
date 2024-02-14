console.log('kkp');
let input = document.getElementById('input');
let defaultText = document.getElementById('default');
let debounceText = document.getElementById('debounce');
// let btn = document.getElementById('btn');
let throttleText = document.getElementById('throttle');

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
}, 5000);

function Throttle(cb, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            cb(...args);
            lastCall = now;
        }
    }
}

