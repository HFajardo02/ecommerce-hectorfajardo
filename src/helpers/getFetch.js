//import prod1 from './../images/67-Shelby-GT500-2010-NM.jpeg';

let productos = [
    {
        "id": 1,
        "toy_num": ["R0916"],
        "col_num": ["001"],
        "model": ["67 Shelby GT500"],
        "series": ["2010 New Models"],
        "series_num": ["1/44"],
        //"photo_url": prod1,
        "photo_url": ["https://static.wikia.nocookie.net/hotwheels/images/b/b5/67_Shelby_GT500_-_2010_NM.jpg/revision/latest?cb=20090913235854"],
        "year": 2010,
        "stock": 5,
        "precio": 100,
    },
    {
        "id": 2,
        "toy_num": ["R0917"],
        "col_num": ["002"],
        "model": ["Tooligan"],
        "series": ["2010 New Models"],
        "series_num": ["2/44"],
        "photo_url": ["https://static.wikia.nocookie.net/hotwheels/images/4/4f/Tooligan_-_10_NM.jpg/revision/latest?cb=20090930040830"],        "year": 2010,
        "stock": 10,
        "precio": 75,
    },
    {
        "id":3,
        "toy_num": ["R0918"],
        "col_num": ["003"],
        "model": ["67 Pontiac Firebird 400"],
        "series": ["2010 New Models"],
        "series_num": ["3/44"],
        "photo_url": ["https://static.wikia.nocookie.net/hotwheels/images/c/c6/P9300006.JPG/revision/latest?cb=20091006052247"],
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
        // reject('no qtengo nada para')    
    })
}  


// consulta detalla de un producto
let producto =  {
    "id": 1,
    "toy_num": ["R0916"],
    "col_num": ["001"],
    "model": ["67 Shelby GT500"],
    "series": ["2010 New Models"],
    "series_num": ["1/44"],
    //"photo_url": prod1,
    "photo_url": ["https://static.wikia.nocookie.net/hotwheels/images/b/b5/67_Shelby_GT500_-_2010_NM.jpg/revision/latest?cb=20090913235854"],
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