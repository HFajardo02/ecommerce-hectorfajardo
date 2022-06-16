//import prod1 from './../images/prod1.jpg';

let productos = [
    {
        "id": "1",
        "categoria": "autos",
        "toy_num": ["R0916"],
        "col_num": ["001"],
        "model": ["67 Shelby GT500"],
        "series": ["2010 New Models"],
        "series_num": ["1/44"],
        //"photo_url": prod1,
        "photo_url": "https://versareanosdourados.vteximg.com.br/arquivos/ids/212627-1000-1000/Miniatura-1967-Shelby-Gt-500-Escala-1-38-Branco-E-Azul.jpg?v=637656023007530000",
        "year": 2010,
        "stock": 5,
        "precio": 100,
    },
    {
        "id": "2",
        "categoria": "trucks",
        "toy_num": ["R0917"],
        "col_num": ["002"],
        "model": ["Tooligan"],
        "series": ["2010 New Models"],
        "series_num": ["2/44"],
        "photo_url": "https://scontent.fmex5-1.fna.fbcdn.net/v/t45.5328-4/64406885_2180154728750157_5185091696068657152_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=XEQZ3rqbSVwAX8TAC6Y&_nc_ht=scontent.fmex5-1.fna&oh=00_AT9Ym8ed2r73r1bglDeCGqNnFIOO01tXXbpuSqpJqVRGqg&oe=62AFB42B",
        "year": 2010,
        "stock": 10,
        "precio": 75,
    },
    {
        "id":"3",
        "categoria": "clasicos",
        "toy_num": ["R0918"],
        "col_num": ["003"],
        "model": ["67 Pontiac Firebird 400"],
        "series": ["2010 New Models"],
        "series_num": ["3/44"],
        "photo_url": "https://www.escalaminiaturas.com.br/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/t/9/t9948.jpg",
        "year": 2010,
        "stock": 15,
        "precio": 120,
    },
    {
        "id":"4",
        "categoria": "super mario bros",
        "toy_num": ["Mario0918"],
        "col_num": ["003"],
        "model": ["Super Mario 400"],
        "series": ["Mario Bros 2020"],
        "series_num": ["3/44"],
        "photo_url": "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/45496883232_3.jpg",
        "year": 2010,
        "stock": 15,
        "precio": 120,
    },
  ];

  export const getFetch = (id) =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod => prod.id === id))              
            } else {
                resolve(productos)          
            }
        },2000)    
            
    })
}  


// consulta para detalle de un producto
let producto =  {
    "id": "1",
        "categoria": "autos",
        "toy_num": ["R0916"],
        "col_num": ["001"],
        "model": ["67 Shelby GT500"],
        "series": ["2010 New Models"],
        "series_num": ["1/44"],
        //"photo_url": prod1,
        "photo_url": "https://versareanosdourados.vteximg.com.br/arquivos/ids/212627-1000-1000/Miniatura-1967-Shelby-Gt-500-Escala-1-38-Branco-E-Azul.jpg?v=637656023007530000",
        "year": 2010,
        "stock": 5,
        "precio": 100,
  }
  

export const getFetchOne = () =>{    
   
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            resolve(producto)   
        },2000)    
            
    })
}