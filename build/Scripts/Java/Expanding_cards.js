const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        remoceActiveClasses()
        panel.classList.add('active')
    })
})

function remoceActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}