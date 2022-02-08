var field = document.getElementById('area')


field.addEventListener('click', function(){
    field.innerHTML = ('clicou')
    field.style.color = 'black'
})
field.addEventListener('mouseenter', function(){
    field.innerHTML = ('entrou!')
    field.style.backgroundColor = 'yellow'  
})
field.addEventListener('mouseout', function(){
    field.innerHTML = ('saiu')
})