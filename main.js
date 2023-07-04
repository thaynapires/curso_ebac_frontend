const form = document.getElementById('formulario')

document.getElementById('campoA').value = ""
document.getElementById('campoB').value = ""

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    var campoA = document.getElementById('campoA')
    var campoB = document.getElementById('campoB')
    let numA = parseInt(campoA.value)
    let numB = parseInt(campoB.value)

    if (numB > numA) {
        document.querySelector('.valid-mensage').style.display = 'block'
        document.querySelector('.invalid-mensage').style.display = 'none'
        campoA.value='';
        campoB.value='';         
        
    } else {
        document.querySelector('.invalid-mensage').style.display = 'block'
        document.querySelector('.valid-mensage').style.display = 'none'
            
        
    }
})
