
const text = "Elite  Wear  Collection";
const container = document.querySelector('.vertical-text');

// Clear existing content
container.innerHTML = '';

text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = 0;
    span.style.display = 'block';
    span.style.transition = `opacity 0.5s ease ${index * 80}ms`;
    container.appendChild(span);
});

// Animate in
requestAnimationFrame(() => {
    document.querySelectorAll('.vertical-text span').forEach(span => {
        span.style.opacity = 1;
    });
});