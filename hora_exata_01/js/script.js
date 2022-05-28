function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()  
    var hora = data.getHours()
    
    
    msg.innerHTML = 'Agora são '+ hora +'  horas'  
    
    if(hora >= 0 && hora < 12){
        //Bom Dia!!
        img.src = 'img/manha.png'
        document.body.style.background = '#a6656b'
        
     }else if (hora >= 12 && hora < 18) {
           //Boa Tarde!!
        img.src = 'img/tarde.png'
        document.body.style.background = '#f2b05'
     }else{
         //Boa Noite!!
        img.src = 'img/noite.png'
        document.body.style.background = '#2f2229'
        
     }
    }

       
    

