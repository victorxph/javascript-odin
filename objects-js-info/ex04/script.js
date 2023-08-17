let menu = {

    width: 200,
    height: 300,
    title: "My menu"

};

function multiplyNumeric(obj) {
    
    for (let key in obj) {
    
        if (typeof obj[key] == 'number'){
            
            obj[key] *= 2;
        
        }
        
    }

}

multiplyNumeric(menu);

console.log(menu);

/*
A linha menu[key] = menu[key] * 2; funciona corretamente para atualizar as propriedades do objeto menu porque a variável key representa o nome da propriedade que está sendo iterada durante o loop for...in.

Neste caso, o uso de colchetes [ ] (notação de colchetes) é apropriado porque permite acessar as propriedades de um objeto usando uma string (nome da propriedade) armazenada em uma variável. Como o nome da propriedade é dinâmico e é determinado durante a iteração do loop, você precisa usar a notação de colchetes para acessar essa propriedade específica.

Usar a notação de ponto (.) seria apropriado se você soubesse de antemão o nome exato da propriedade que deseja acessar e ela fosse uma string válida, mas nesse caso, como você está iterando sobre todas as propriedades do objeto, a notação de colchetes é necessária para fazer a atualização correta.
*/