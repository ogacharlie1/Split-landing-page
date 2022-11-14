// first we bring in our divs ie left, right and container

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

//  Next we add an eventlistener which will listen for the mouseenter event and when this happens, we call and arrow function and take the container and call a classlist.add 

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))


right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))