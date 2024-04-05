import { initializeApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore/lite';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAqfKoJJV9AvIMFs9M8RKJ2GmY0A5P23io",
  authDomain: "psychologists-40775.firebaseapp.com",
  projectId: "psychologists-40775",
  storageBucket: "psychologists-40775.appspot.com",
  messagingSenderId: "761463462657",
  appId: "1:761463462657:web:6aef4cda8742544f5c9900",
  measurementId: "G-HZDPE1FH6B"
};


const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);

export async function getPsycologists(db: Firestore): Promise<any[]> {
  const psycologistsCol = collection(db, 'psycologists');
  const psycologistsSnapshot = await getDocs(psycologistsCol);
  const psycologistsList = psycologistsSnapshot.docs.map(doc => doc.data());
  console.log(psycologistsList);
  return psycologistsList;
}