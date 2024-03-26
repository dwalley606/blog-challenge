var formEl = document.querySelector('#form-button')
console.log(formEl)
function submitButton(event) {
    event.preventDefault()
    console.log(event)

}
document.querySelector('.pic-frame').addEventListener('click', function(event) {
    console.log(event)
    location.href = './blog.html'
})


formEl.addEventListener('submit', function (event) {
    submitButton(event)
})

