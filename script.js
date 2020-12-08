const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')


// Events alter the way page looks by adding a new class to the container which is the parent
// of the left and right section
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))