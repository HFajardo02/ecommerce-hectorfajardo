import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDJz6UACTLMINHYTPGYjw3j-3SagEWjtdY",
	authDomain: "ecommerce-hectorfajardo.firebaseapp.com",
	projectId: "ecommerce-hectorfajardo",
	storageBucket: "ecommerce-hectorfajardo.appspot.com",
	messagingSenderId: "116736060659",
	appId: "1:116736060659:web:dbcc9c1932196e6ed8db86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;


//Llamada a todos los productos
export async function getAllItems(){

	const miColeccion = collection (firestoreDB, "productos");

	const productSnap = await getDocs(miColeccion);

	return productSnap.docs.map(doc => {
		return {
			...doc.data(),
			id: doc.id
		}
	});
}


//LLamada por categoria
export async function getItemsByCategory (categoriaId) {

	const miColeccion = collection (firestoreDB, "productos");

	const queryProducts = query (miColeccion, where("categoria", "==", categoriaId));

	const productSnap = await getDocs(queryProducts);

	return productSnap.docs.map(doc => {
		return {
			...doc.data(),
			id: doc.id
		}
	});

}


//Llamada solo por producto
export async function getItem (id){

	const miColeccion = collection (firestoreDB, "productos");

	const productRef = doc(miColeccion, id);

	const productSnap = await getDoc(productRef);

	return{
		...productSnap.data(),
		id: productSnap
	}

}