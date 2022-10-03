import React, {useEffect,useState} from 'react';
import { Navigate } from 'react-router-dom';
import { async } from '@firebase/util';
import {collection,addDoc, serverTimestamp} from 'firebase/firestore';
import {db,storage} from '../firebase'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {doc, getDoc, getDocs, setDoc, updateDoc,deleteDoc} from 'firebase/firestore';



const AddProduct = () => {
    const navigate = Navigate;

    const productCollection = collection(db,'products');

    const [file,setFile] = useState("");

    const [id,setID] = useState("");
    const [title,setTitle] = useState("");
    const [vendor,setVendor] = useState("");
    const[supplier,setSupplier] = useState("");
    const[supPhone,setSupPhone] = useState("");
    const [unitPrice,setUnitPrice] = useState(0);
    const [price,setPrice] = useState(0);
    const [quantity,setQuantity] = useState(0);
    const [region,setRegion] = useState("");
    const [category,setCategory] = useState("");
    const [error,setError] = useState("");


//async function to add product to firestore and then clear the form and get data from drop down menu
const addProduct = async (e) => {
    e.preventDefault();
    //if statement to check if the file is empty
   if(title.length===0 || vendor.length===0 || supplier.length===0 || supPhone.length===0 || unitPrice.length===0 || price.length===0 || quantity.length===0 || region.length===0 || category.length===0){
         setError(true);
    }
    else{
        setError(false);
        try {
            await addDoc(productCollection,{
                title,
                vendor,
                unitPrice,
                price,
                quantity,
                region,
                category,
                supplier,
                supPhone,
                timeStamp: serverTimestamp()

                //upload image to firebase storage and get the download url
            }).then(async (docRef) => {
                const storageRef = ref(storage,`images/${docRef.id}`);
                const uploadTask = uploadBytesResumable(storageRef,file);
                uploadTask.on('state_changed', (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                      case 'paused':
                        console.log('Upload is paused');
                        break;
                      case 'running':
                        console.log('Upload is running');
                        break;
                        default:
                            break;
                        
                    }
                  }, (error) => {
                    console.log(error);
                  }, async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    console.log('File available at', downloadURL);
                    await updateDoc(doc(db,'products',docRef.id),{
                        image: downloadURL
                    })
                  });
            }).then(() => {
                //custom alert to show that the product has been added
                alert("Product has been added");
                clearForm();
            })
        } catch (error) {
            console.log(error);
        } 
        
        
        }
        const clearForm = () => {
            setTitle("");
            setVendor("");
            setUnitPrice(0);
            setPrice(0);
            setQuantity(0);
            setRegion("");
            setCategory("");
        }
        navigate('/Inventory');
    }

   
    //delete product from firestore function
    

  


  return (
    <div className="m-2 p-4 md:m-10 mt-24 md:p-10 bg-white rounded-3xl w-5/6 place-content-center">
        <p className='font-bold text-justify text-2xl text-gray-900 mb-4'>Add Product</p>
        <div className='grid grid-cols-1 gap-6'>
            
        <form onSubmit={addProduct}>
            {/*set ID*/}
    <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Enter Product Name</p> : ""}
        <input onChange={(event)=>{setTitle(event.target.value)}} type="text" name="floating_product_name" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Enter Vendor Name</p> : ""}
        <input onChange={(event)=>{setVendor(event.target.value)}} type="text" name="floating_vendor" id="vendor" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vendor (Ex:- Johnnie Walker)</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Set Unit Price</p> : ""}
        <input onChange={(event)=>{setUnitPrice(event.target.value)}} type="number" step={10} min='0' name="floating_unit_price" id="unitPrice" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Unit Price</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Set Retail Price</p> : ""}
        <input onChange={(event)=>{setPrice(event.target.value)}} type="number" step={10}  min='0' name="floating_retail_price" id="price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Retail Price</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Set Quantity</p> : ""}
        <input onChange={(event)=>{setQuantity(event.target.value)}} type="number" step={1} min='0' name="floating_quantity" id="quantity" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
    
    </div>
    
        <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Select an Image</p> : ""}
        <label class="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300" for="user_avatar">Upload Image</label>
        <input class="block w-full text-sm text-gray-500 bg-gray-50  border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="image_help" id="image" type="file"/>  
    </div>
    
     
  </div>

 
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Select a Region</p> : ""}
    <select onChange={(event)=>{setRegion(event.target.value)}} id="region" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a region</option>
        <option value="America">America</option>
        <option value="Italy">Italy</option>
        <option value="Irish">Irish</option>
        <option value="Scotch">Scotch</option>
        <option value="Russian">Russian</option>
        <option value="Sri Lanka">Sri Lankan</option>
        <option value="India">Indian</option>
        <option value="Japan">Japanese</option>
        <option value="Cuba" >Cuban</option>
        <option value="Other">Other</option>
    </select>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Select a Category</p> : ""}
    <select onChange={(event)=>{setCategory(event.target.value)}} id="category" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a category</option>
        <option value="Arrack">Arrack</option>
        <option value="Brandy">Brandy</option>
        <option value="Gin">Gin</option>
        <option value="Rum">Rum</option>
        <option value="Tequila">Tequila</option>
        <option value="Vodka">Vodka</option>
        <option value="Whiskey">Whiskey</option>
        <option value="Wine">Wine</option>
        <option value="Sake">Sake</option>
        <option value="Other">Other</option>
    </select>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
  <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Set a Supplier</p> : ""}
        <input onChange={(event)=>{setSupplier(event.target.value)}} type="text" name="floating_supplier" id="supplier" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_supplier" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supplier</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        {error ?<p className="text-red-500 text-xs italic">Supplier Phone Number</p> : ""}
        <input onChange={(event)=>{setSupPhone(event.target.value)}} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="supPhone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""/>
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number (123-456-7890)</label>
    </div>
  </div>
  <button onClick={addProduct} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
</form>

        </div>
   </div>
  )
}

export default AddProduct