function objetos(){
    let objetos = {nome:"Vinícius", idade: 17, cidade:"Sorocaba"}
    for( let prop in objetos){
        console.log(typeof objetos[prop]);
    }
}
objetos();
    
    