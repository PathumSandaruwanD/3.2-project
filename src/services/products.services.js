//creating data layer for products
import React from 'react';

import { db } from '../config/firebase.config';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

class productsDataService{
   addProduct = (newProduct) => {
      return addDoc(productsCollection, newProduct);
   }
    getProducts = () => {
        return getDocs(productsCollection);
    }
    updateProduct = (id, updateProduct) => {
       const productRef = doc(db, "products", id);
         return updateDoc(productRef, updateProduct);
    }
    deleteProduct = (id) => {
        const productRef = doc(db, "products", id);
        return deleteDoc(productRef);
    }
    getProduct = (id) => {
        const productRef = doc(db, "products", id);
        return getDoc(productRef);
    }
}
export default new productsDataService();