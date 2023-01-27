
// import React from 'react';

// const afficheSub=(props)=>{
//     const product = props.product;

//     return (
//         <div>
//             <div>
//             <h2>Nom du produit de substitution : {product.product_name}</h2>
//             <p>Marque : {product.brands}</p>
//             <p>Magasins : {product.stores}</p>
//             <p>URL : {product.url}</p>
//             <p>Nutriscore du produit : {product.product_nutriscore}</p>
//             </div>

//         </div>
//     );
// };

// export default afficheSub;
// import React, { useState } from "react";

// function AfficheSub() {
//   const [barcode, setBarcode] = useState("");
//   const [substitute, setSubstitute] = useState(null);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch("./find-substitute", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ barcode: barcode })
//     });
//     const data = await response.json();
//     setSubstitute(data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Code barre :
//           <input
//             type="text"
//             value={barcode}
//             onChange={e => setBarcode(e.target.value)}
//           />
//         </label>
//         <input type="submit" value="Rechercher" />
//       </form>
//       {substitute && (
//         <div>
//           <h2>{substitute.product_name}</h2>
//           <p>Marque : {substitute.brands}</p>
//           <p>Magasins : {substitute.stores}</p>
//           <p>URL : {substitute.url}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AfficheSub;



import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ onSearch }) {
  const [barcode, setBarcode] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:8000/findSubstitute/`, { barcode })
      .then(response => {
        onSearch(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={barcode} onChange={e => setBarcode(e.target.value)} />
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default SearchBar;
