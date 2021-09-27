const { search, suggest, regex } = require('puzzy-search')

let  str = document.querySelector('#search')
let  btnSearch = document.querySelector('#btnSearch')
let  suggestion = document.querySelector('#didyoumean')
let  resultList = document.querySelector('#result')

str.addEventListener('input', () => {
    if (str.value)
        suggestion.innerHTML = `Did you mean: ${suggest(str.value)}`
    else
        suggestion.innerHTML = ''
})