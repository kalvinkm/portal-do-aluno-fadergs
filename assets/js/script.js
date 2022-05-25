let no = document.getElementById('no')
let yes = document.getElementById('yes')


no.addEventListener('click', () => {
    document.getElementById('no').style  = 'display: none;'
    document.getElementById('yes').style  = 'display: inline;'
})

yes.addEventListener('click', () => {
    document.getElementById('yes').style  = 'display: none;'
    document.getElementById('no').style  = 'display: inline;'
})