'use strict'

const API_Key = ''
const API_URL = ''

function handleSearch() {
    document.getElementById('search-btn').addEventListener('click', function(e){
        e.preventDefault()
        console.log('hello world')
        let searchTerm = document.getElementById('search-term').val()
        console.log(searchTerm)
    })
}

handleSearch();