function showSectionById(id) {
    document.getElementById('card-1').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
    
    document.getElementById(id).classList.remove('hidden')
}