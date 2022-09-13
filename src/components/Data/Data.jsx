let productos = [
    {
        "id":1,
        "categoria": "Autos",
        "model": "67 Shelby GT500",
        "series": "2020 New Models",
        "photo_url": "https://versareanosdourados.vteximg.com.br/arquivos/ids/212627-1000-1000/Miniatura-1967-Shelby-Gt-500-Escala-1-38-Branco-E-Azul.jpg?v=637656023007530000",
        "year": 2020,
        "stock": 5,
        "precio": 100,
    },
    {
        "id":2,
        "categoria": "Trucks",
        "model": "Tooligan",
        "series": "2000 Great Models",
        "photo_url": "https://www.escalaminiaturas.com.br/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/r/0/r0917.jpg",
        "year": 2000,
        "stock": 10,
        "precio": 75,
    },
    {
        "id":3,
        "categoria": "Clasicos",
        "model": "67 Pontiac Firebird 400",
        "series": "1900 Clasic Models",
        "photo_url": "https://www.escalaminiaturas.com.br/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/t/9/t9948.jpg",
        "year": 2000,
        "stock": 15,
        "precio": 150,
    },
    {
        "id":4,
        "categoria": "Super Mario Bros",
        "model": "Super Mario 400",
        "series": "Mario Bros 2020",
        "photo_url": "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/45496883232_3.jpg",
        "year": 2020,
        "stock": 8,
        "precio": 200,
    },
];

export const getFetch = (id) =>{    
    
    return new Promise( (resolve)=>{   
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod => prod.id === id))              
            } else {
                resolve(productos)          
            }
        },2000)            
    })
}
