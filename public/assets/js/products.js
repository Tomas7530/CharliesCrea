(function($) {
    
    var product = [
        {
            "cat" : 'Adulte',
            "name" : 'Trousse simple',
            "surname" : 'trousse-simple',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 2
        },{
            "cat" : 'Adulte',
            "name" : 'Trousse plate',
            "surname" : 'trousse-plate',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 2
        },{
            "cat" : 'Adulte',
            "name" : 'Trousse berlingot',
            "surname" : 'trousse-berlingot',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 2
        },{
            "cat" : 'Adulte',
            "name" : 'Trousse de toilette',
            "surname" : 'trousse-toilette',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 2
        },{
            "cat" : 'Adulte',
            "name" : 'Trousse de toilette rabat-rangement',
            "surname" : 'trousse-toilette-rabat',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 2
        },{
            "cat" : 'Adulte',
            "name" : 'Vide poche',
            "surname" : 'vide-poche',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 2
        },{
            "cat" : 'Enfant',
            "name" : 'Protège carnet de santé',
            "surname" : 'protege-carnet-sante',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 3
        },{
            "cat" : 'Enfant',
            "name" : 'Trousse à langer',
            "surname" : 'trousse-langer',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 1
        },{
            "cat" : 'Enfant',
            "name" : 'Housse de table à langer',
            "surname" : 'housse-table-langer',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 2
        },{
            "cat" : 'Enfant',
            "name" : 'Barboteuse',
            "surname" : 'barboteuse',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 3
        },{
            "cat" : 'Enfant',
            "name" : 'Sortie de bain',
            "surname" : 'sortie-bain',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 4
        },{
            "cat" : 'Enfant',
            "name" : 'Tour de lit',
            "surname" : 'tour-lit',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 5
        },{
            "cat" : 'Enfant',
            "name" : 'Mobile bébé',
            "surname" : 'mobile-bebe',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 6
        },{
            "cat" : 'Enfant',
            "name" : 'Bavoir',
            "surname" : 'bavoir',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 7
        },{
            "cat" : 'Enfant',
            "name" : 'Doudou',
            "surname" : 'doudou',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 8
        },{
            "cat" : 'Enfant',
            "name" : 'Hochet',
            "surname" : 'hochet',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 9
        },{
            "cat" : 'Enfant',
            "name" : 'Vide poche',
            "surname" : 'vide-poche',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 10
        },{
            "cat" : 'Peluche',
            "name" : 'Lapin',
            "surname" : 'lapin',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 10
        },{
            "cat" : 'Peluche',
            "name" : 'Chat',
            "surname" : 'chat',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 10
        },{
            "cat" : 'Peluche',
            "name" : 'Tortue',
            "surname" : 'tortue',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 10
        },{
            "cat" : 'Peluche',
            "name" : 'Hippopotame',
            "surname" : 'hippopotame',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 10
        },{
            "cat" : 'Peluche',
            "name" : 'Rhinocéros',
            "surname" : 'rhinoceros',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 10
        },{
            "cat" : 'Peluche',
            "name" : 'Girafe',
            "surname" : 'girafe',
            "descr" : 'Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.',
            "price" : 50,
            "option" : 10
        },{
            "cat" : 'Adulte',
            "name" : 'Méga truc',
            "surname" : 'mega-truc',
            "descr" : 'qsdmlkazef azef aozefn alkzendc lmazecaz opkcapokpaozkepojaze pojazpoedj paozkeex oakzepo ',
            "price" : 50,
            "option" : 3
        }
    ];
    
//ajouter code html produits
    function addHtml(cat, name, surname, descr, price, option){
        $('.'+cat).after("<div class=\"product\" name=\""+surname+"\" price=\""+price+"\" descr=\""+name+"\" option=\""+option+"\">  <hr>  <h3 class=\"major\">"+name+"</h3>  <p>"+descr+"</p>  <span class=\"image main image-section\">  <img src=\"images/"+surname+".jpg\" /></span>  <p class=\"sous-section\"><a class=\"personnalise\" name=\""+name+"\" cat=\""+cat+"\" surname=\""+surname+"\" target=\"_blank\">Personnaliser</a></p></div>");
        
        $('#select-'+cat).append("<option name=\""+name+"\" value=\""+surname+"\" price=\""+price+"\" option=\""+option+"\">"+name+"</option>");
    }
    
    for(var i=0;i<product.length;i++){
        var cat = product[i].cat,
            name = product[i].name,
            surname = product[i].surname,
            descr = product[i].descr,
            price = product[i].price,
            option = product[i].option;
        
        addHtml(cat,name,surname,descr,price,option)
    }
    
    
})(jQuery);