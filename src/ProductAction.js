// export const SORT_PRODUCTS = "SORT_PRODUCTS";
// export const SORT_PRODUCTS_NUMBER = "SORT_PRODUCTS_NUMBER";

// import React, { useState, useEffect } from "react";

// async function fetchData(sortBy, Limit, Page) {
//   let qs = "status=Active";
//   if (sortBy) qs = qs + "&sort=" + sortBy;
//   if (Limit) qs = qs + "&limit=" + Limit;
//   if (Page) qs = qs + "&Page=" + Page;
//   qs =
//     sortBy === undefined && Limit === undefined
//       ? qs + "&sort=pricing.retail;asc&limit=24"
//       : qs;

//   const res = await fetch(
//     "https://opt-showcase-api.optcentral.com/products?" + qs
//   );
//   res
//     .json()
//     .then(res => setViewAllDesignes(res.data))
//     .catch(err => setErrors(err));
// }
// // console.log(viewAllDesignes, 'vvv')

// useEffect(() => {
//   fetchData();
// }, []);


// export const handleSort = viewAllDesignes => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch({
//         type: SORT_PRODUCTS,
//         payload: viewAllDesignes
//       });
//     }, 700);
//   };
// };

// export const handleProductsNum = viewAllDesignes => {
//     return dispatch => {
//       setTimeout(() => {
//         dispatch({
//           type: SORT_PRODUCTS_NUMBER,
//           payload: viewAllDesignes
//         });
//       }, 700);
//     };
//   };
