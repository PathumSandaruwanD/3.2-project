import React from 'react';

const ReadOnlyRow = ({product}) => {
  return (
    <div><tr class="bg-white border-b text-gray-700">
    <td class="p-3 text-center">
        <input type="checkbox" />
    </td>
    <td class="p-3 text-center">
        {product.id}
    </td>
    <td class="p-3 text-center">
        <img src={product.image} alt="product" class="w-10 h-10"/>
    </td>
    <td class="p-3 text-center">
        {product.title}
    </td>
    <td class="p-3 text-center">
        {product.price}
    </td>
    <td class="p-3 text-center">
        {product.quantity}
    </td>
    <td class="p-3 text-center" >
        {product.supplier}
    </td>
    <td class="p-3 text-center">
        {product.supPhone}
    </td>
    <td class="p-3 text-center">
        {product.vendor}
    </td>
    
</tr></div>
  )
}

export default ReadOnlyRow