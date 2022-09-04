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
    updateProduct = (productId, updateProduct) => {
       const productRef = doc(db, "products", productId);
         return updateDoc(productRef, updateProduct);
    }
    deleteProduct = (productId) => {
        const productRef = doc(db, "products", productId);
        return deleteDoc(productRef);
    }
    getProduct = (productId) => {
        const productRef = doc(db, "products", productId);
        return getDoc(productRef);
    }
}
export default new productsDataService();