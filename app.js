const buttons = document.querySelectorAll('a');
buttons.forEach(btn =>{
    btn.addEventListener('click', function(e){
        let x = e.clientX -e.target
    })
})