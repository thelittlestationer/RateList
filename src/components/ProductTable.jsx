import styles from './ProductTable.module.css';

/*Pictures*/
//ROUGH REGISTERS
import ringrough from './Pictures/100RingRoughRegister.jpg';
import ringrough180 from './Pictures/RingRoughRegister2.jpg';
import NonRingRoughRegister150 from './Pictures/NonRingRoughRegister150.jpg';
import NonRingRoughRegister210 from './Pictures/NonRingRoughRegister210.jpg';
//NEAT REGISTERS
import P5 from './Pictures/P5.RingNeatRegister.jpg';
import P6 from './Pictures/P6.RingNeatRegister.jpg';
import A5 from './Pictures/A5NeatPageRegister.jpg';
import A6 from './Pictures/A6NeatPageRegister.jpg';
//POINTERS/ BALLPOINTS
import PianoPen from './Pictures/PianoPen.jpg';
import SignaturePen from './Pictures/SignaturPen.jpg';
import DollarPen from './Pictures/DollarBallPen.jpg';
import DollarPointer from './Pictures/DollarPointer.jpg';
import DollarGelPen from './Pictures/DollarGelPen.jpg';
import Dollar10Pointers from './Pictures/10DollarPointers.jpg';

//PAPERS
import A4WhitePages from './Pictures/A4WhitePages.jpg';
//1;
import NarrowLineSheets from './Pictures/NarrowLineSheets.jpg';

//MARKERS
import DollarMarker from './Pictures/DollarMarker.jpg';
import DollarNeonMarker from './Pictures/DollarNeonMarker.jpg';
//TAPES

import OsakaTape from './Pictures/OsakaTape.jpg';
import TransparentTape1 from './Pictures/TransparentTape1.jpg';
import TransparentTape2 from './Pictures/TransparentTape2.jpg';
import NonTransparentTape175 from './Pictures/NonTransparentTape1.75.jpg';
import TransparentTape075 from './Pictures/TransparentTape075.jpg';



//PLASTIC FILES
import ButtonFiles from './Pictures/ButtonFiles.jpg';
import AssignmentFiles from './Pictures/AssignmentFiles.jpg';


//RULERS
import PlasticRulers from './Pictures/PlasticRulers.jpg';
import StainlessSteel from './Pictures/StainlessSteel.jpg';

//DRAWING RELATED
import Pencil from './Pictures/Pencil.jpg';
import Eraser from './Pictures/Eraser.jpg';
import Sharpner from './Pictures/Sharpner.jpg';

//CALCULATORS
import Calc552 from './Pictures/552.CasioCalculator.jpg';
import Calc417 from './Pictures/417.CasioCalculator.jpg';
import Calc4172 from './Pictures/417.CasioCalculator2.jpg';



//soon
import Soon from './Pictures/Soon.jpg';


//SPORTS
//1
//2
//3

//OTHERS
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';
// import P5 from './Pictures/RingNeatRegister.jpg';


const products = [
  {
    category: 'Rough Pages Registers',
    id: 'rough-pages-registers',
    items: [
      // { id: '1', name: 'Ring Register', description: '~100 pages', price: '230', pictureUrl: [ringrough] },
      { id: '1', name: 'Ring Register', description: '~180 pages', price: '360', pictureUrl: [ringrough180] },
      // { id: '3', name: 'Non-Ring Register', description: '~150 pages', price: '250', pictureUrl: [NonRingRoughRegister150] },

      {
        id: '2', name: 'Non-Ring Register', description: '~210 pages', price: '360', pictureUrl: [NonRingRoughRegister210],
        // customClass: 'specific-class',
      }
    ],
  },
  {
    category: 'Neat Pages Registers',
    id: 'neat-pages-registers',
    items: [
      { id: '1', name: 'Ring Register', description: '5 Portions/Subjects', price: '400', pictureUrl: [P5] },
      {
        id: '2', name: 'Ring Register', description: '6 Portions/Subjects', price: '470 ', pictureUrl: [P6],
        // customClass: 'soldClass',
      },
      // { id: '3', name: 'NotePad', description: 'A5 (1/2 of A4)', price: '150', pictureUrl: [A5] },
      { id: '3', name: 'NotePad', description: 'A6 (1/4 of A4)', price: '70', pictureUrl: [A6] },
    ],
  },
  {
    category: 'Ball/Pointers Pens',
    id: 'ball-pointers-pens',
    items: [
      { id: '1', name: 'Piano Ball Pen', description: 'Black, Red and Blue color', price: '20', pictureUrl: [PianoPen] },
      { id: '2', name: 'Signature Ball Pen', description: 'Black, Blue', price: '20', pictureUrl: [SignaturePen] },
      { id: '3', name: 'Dollar Ball Pen', description: 'Black, Blue', price: '30', pictureUrl: [DollarPen] },
      { id: '4', name: 'Dollar Pointer', description: 'Blue, Black and green', price: '30', pictureUrl: [DollarPointer] },
      { id: '5', name: 'Dollar Gel Pen', description: 'Blue, Black', price: '75', pictureUrl: [DollarGelPen] },
      { id: '6', name: 'Dollar Pointer', description: '10 diff: colors pack', price: '330', pictureUrl: [Dollar10Pointers] },
    ],
  },
  {
    category: 'Pages / Sheets',
    id: 'pages-sheets',
    items: [
      { id: '1', name: 'A4 Size Paper', description: '70 GSM / White', price: '4', pictureUrl: [A4WhitePages] },
      // { id: '2', name: 'Legal Size Paper', description: '70 GSM / White', price: '6', pictureUrl: 'https://example.com/images/legal_paper.jpg' },
      { id: '2', name: 'Narrow Line Sheets', description: 'Medium/Neat', price: '110/140', pictureUrl: [NarrowLineSheets] },
    ],
  },
  {
    category: 'Markers / Highlighters',
    id: 'markers-highlighters',
    items: [
      { id: '1', name: 'Dollar Marker', description: 'Black, Blue', price: '20', pictureUrl: [DollarMarker] },
      { id: '2', name: 'Dollar Neon Highlighter', description: 'Yellow, Pink', price: '50', pictureUrl: [DollarNeonMarker] },
    ],
  },
  {
    category: 'Tapes',
    id: 'tapes',
    items: [
      { id: '1', name: 'OSAKA Tape', description: 'White / 10-gazz', price: '70', pictureUrl: [OsakaTape] },
      { id: '2', name: 'Transparent Scotch Tape', description: 'Thickness: 1 inch', price: '160', pictureUrl: [TransparentTape1] },
      { id: '3', name: 'Transparent Scotch Tape', description: 'Thickness: 2 inch', price: '280', pictureUrl: [TransparentTape2] },
      { id: '4', name: 'Non-Transparent Scotch Tape', description: 'Thickness: 1.75 inch', price: '200', pictureUrl: [NonTransparentTape175] },
      { id: '5', name: 'Transparent Tape', description: 'Thickness: 0.75 inch / 30 yards', price: '40', pictureUrl: [TransparentTape075]},
    ],
  },
  {
    category: 'Plastic Files',
    id: 'plastic-files',
    items: [
      { id: '1', name: 'Button File', description: 'Color: Green', price: '45', pictureUrl: [ButtonFiles] },
      { id: '2', name: 'Assignment File', description: 'Stick files', price: '40', pictureUrl: [AssignmentFiles] },
    ],
  },
  {
    category: 'Rulers',
    id: 'rulers',
    items: [
      { id: '1', name: 'Plastic Ruler', description: '15/20/30 cm', price: '30/50/60', pictureUrl: [PlasticRulers] },
      { id: '2', name: 'Stainless Steel Ruler', description: '30 cm (High Quality)', price: '120', pictureUrl: [StainlessSteel] },
    ],
  },
  {
    category: 'Drawing Related',
    id: 'drawing-related',
    items: [
      { id: '1', name: 'Pencil', description: 'Dollar', price: '20', pictureUrl:[Pencil] },
      { id: '2', name: 'Eraser', description: 'White', price: '15', pictureUrl: [Eraser] },
      { id: '3', name: 'Sharpener', description: 'Dux High Quality', price: '20', pictureUrl: [Sharpner]},
    ],
  },
  {
    category: 'Calculators',
    id: 'calculators',
    items: [
      {
        id: '1', name: 'Casio 552 Functions Calculator', description: 'fx-991EX', price: '2500', pictureUrl: [Calc552],
        
      },
      { id: '2', name: 'Casio 417 Functions Calculator', description: 'fx-991ES', price: '1700', pictureUrl: [Calc417] },
      { id: '3', name: 'Casio 417 Functions Calculator', description: 'High Quality', price: '1850', pictureUrl: [Calc4172  ] },
    ],
  },
  // {
  //   category: 'Sports',
  //   id: 'sports',
  //   items: [
  //     { id: '1', name: 'Cricket Ball', description: 'FG Company', price: '420', pictureUrl: [Soon] },
  //     { id: '2', name: 'Table Tennis Ball', description: 'Double circle', price: '80', pictureUrl: [Soon] },
  //     // { id: '3', name: 'Badminton Shuttle', description: 'Ghafoor Champion', price: '350', pictureUrl: [Soon] },
  //   ],
  // },

  {
    category: 'Others',
    id: 'others',
    items: [
      // { id: 1, name: 'Correction Pen', description: '(Whito)', price: '60', pictureUrl: [Soon] },
      { id: 1, name: 'Sticky Notes', description: '3x3 inch, 100 pcs, (Multicolor)', price: '100', pictureUrl: [Soon] },
      // { id: 3, name: 'NOTE PAD', description: 'High Quality / Size: A6', price: '70', pictureUrl: [Soon] },
      // { id: 4, name: 'Paper Cutter', description: 'Normal Quality', price: '180', pictureUrl: [Soon] },
      // { id: 5, name: 'Scissor', description: 'Normal Quality', price: '60', pictureUrl:[Soon]},
      // { id: 6, name: 'Glue Stick', description: 'Company: Nafees', price: '70', pictureUrl: [Soon]},
      { id: 2, name: 'Elfy', description: 'GMSA', price: '30', pictureUrl: [Soon]},
      // { id: 8, name: 'Metallic Pen Holder', description: 'High Quality', price: '400', pictureUrl: [Soon]},
    ],
  },
];


// const ProductTable = ({ selectedCategory }) => {
//   // Filter products based on the selected category
//   const filteredProducts = selectedCategory === 'all'
//     ? products
//     : products.filter(category => category.id === selectedCategory);

//   // Generate WhatsApp link based on the item name, price, and custom class
//   const generateWhatsAppLink = (name, price, customClass) => {
//     const numericPrice = price.split(' ')[0]; // Extract numeric part of price
//     const message = `I want to buy ${name} with price ${numericPrice} PKR`; // Prepare WhatsApp message
    
//     let whatsappNumber = '923183098174'; // Default WhatsApp number
    
//     // Change WhatsApp number if a specific class is matched
//     if (customClass === 'specific-class') {
//       whatsappNumber = '923105688796';
//     }

//     // Return the WhatsApp API link with the message
//     return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//   };

//   return (
//     <div className={styles.tableContainer}>
//       {filteredProducts.map((category, index) => (
//         <div key={index} id={category.id}>
//           {/* Category Heading */}
//           <h2 className={styles.heading}>{category.category}</h2>

//           {/* Product Table */}
//           <table className={`table table-striped ${styles.table}`}>
//             <thead>
//               <tr>
//                 <th className={styles.head}>S/No</th>
//                 <th className={styles.head}>Items</th>
//                 <th className={styles.head}>Description</th>
//                 <th className={styles.head}>Price</th>
//                 <th className={styles.head}>Action</th>
//                 <th className={styles.head}>Picture</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Loop through category items */}
//               {category.items.map(item => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td> {/* Item ID */}
//                   <td>{item.name}</td> {/* Item Name */}
//                   <td>{item.description}</td> {/* Item Description */}
//                   <td>{item.price}</td> {/* Item Price */}
//                   <td>
              
//                        <a
//                         href={generateWhatsAppLink(item.name, item.price, item.customClass)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={styles.btn}
//                       >
//                         Buy
//                       </a>
                    
//                   </td>
//                   <td>
//                     {/* Link to item picture */}
//                     <a
//                       href={item.pictureUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={styles.btn}
//                     >
//                       Picture
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductTable;  

// const ProductTable = ({ selectedCategory, applyDiscount }) => {
//   // Function to calculate discounted price based on category and discount logic
//   const calculateDiscountedPrice = (price, category) => {
//     const numericPrice = parseFloat(price.split(' ')[0]); // Extract numeric part of the price
//     if (!applyDiscount) return numericPrice;

//     if (category === 'Calculators') {
//       return numericPrice * 0.95; // 5% discount for calculators
//     }
//     return numericPrice * 0.90; // 10% discount for all other categories
//   };

//   // Filter products based on the selected category
//   const filteredProducts = selectedCategory === 'all'
//     ? products
//     : products.filter(category => category.id === selectedCategory);

//   // Generate WhatsApp link based on the item name, discounted price, and custom class
//   const generateWhatsAppLink = (name, discountedPrice, customClass) => {
//     const message = `I want to buy ${name} with price ${discountedPrice} PKR`; // Prepare WhatsApp message
    
//     let whatsappNumber = '923183098174'; // Default WhatsApp number
    
//     // Change WhatsApp number if a specific class is matched
//     if (customClass === 'specific-class') {
//       whatsappNumber = '';
//     }

//     // Return the WhatsApp API link with the message
//     return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//   };

//   return (
//     <div className={styles.tableContainer}>
//       {filteredProducts.map((category, index) => (
//         <div key={index} id={category.id}>
//           {/* Category Heading */}
//           <h2 className={styles.heading}>{category.category}</h2>

//           {/* Product Table */}
//           <table className={`table table-striped ${styles.table}`}>
//             <thead>
//               <tr>
//                 <th className={styles.head}>S/No</th>
//                 <th className={styles.head}>Items</th>
//                 <th className={styles.head}>Description</th>
//                 <th className={styles.head}>Price</th>
//                 <th className={styles.head}>Action</th>
//                 <th className={styles.head}>Picture</th>
//               </tr>
//             </thead>
//             <tbody>
//   {category.items.map(item => {
//     const discountedPrice = calculateDiscountedPrice(item.price, category.category).toFixed(2);
//     return (
//       <tr key={item.id}>
//         <td>{item.id}</td> {/* Item ID */}
//         <td>{item.name}</td> {/* Item Name */}
//         <td>{item.description}</td> {/* Item Description */}
//         <td>
//           {applyDiscount && (
//             <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>
//               {item.price}
//             </span>
//           )}
//           <span>{discountedPrice} PKR</span>
//         </td>
//         <td>
//           <a
//             href={generateWhatsAppLink(item.name, discountedPrice, item.customClass)}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.btn}
//           >
//             Buy
//           </a>
//         </td>
//         <td>
//           <a
//             href={item.pictureUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.btn}
//           >
//             Picture
//           </a>
//         </td>
//       </tr>
//     );
//   })}
// </tbody>

//           </table>

//           <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductTable;
const ProductTable = ({ selectedCategory, applyDiscount }) => {
  // Function to calculate discounted price based on category and discount logic
  const calculateDiscountedPrice = (price, category) => {
    const prices = price.split('/').map(p => parseFloat(p.trim())); // Parse multiple prices
    const discountFactor = category === 'Calculators' ? 0.95 : 0.90; // 5% or 10% discount

    // Apply discount if needed
    if (applyDiscount) {
      return prices.map(p => (p * discountFactor).toFixed(2)).join('/'); // Discounted prices for all variants
    }
    return prices.join('/');
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(category => category.id === selectedCategory);

  // Generate WhatsApp link based on the item name and discounted price
  const generateWhatsAppLink = (name, discountedPrice, customClass) => {
    const message = `I want to buy ${name} with price ${discountedPrice} PKR`; // Prepare WhatsApp message
    let whatsappNumber = '923183098174';

    // Specific WhatsApp number based on custom class
    if (customClass === 'specific-class') {
      whatsappNumber = ''; // Adjust as needed
    }

    // Return the WhatsApp API link with the message
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={styles.tableContainer}>
      {filteredProducts?.map((category, index) => (
        <div key={index} id={category.id}>
          {/* Category Heading */}
          <h2 className={styles.heading}>{category.category}</h2>

          {/* Product Table */}
          <table className={`table table-striped ${styles.table}`}>
            <thead>
              <tr>
                <th className={styles.head}>S/No</th>
                <th className={styles.head}>Items</th>
                <th className={styles.head}>Description</th>
                <th className={styles.head}>Price</th>
                <th className={styles.head}>Action</th>
                <th className={styles.head}>Picture</th>
              </tr>
            </thead>
            <tbody>
              {category.items?.map(item => {
                const discountedPrice = calculateDiscountedPrice(item.price, category.category);
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                      {applyDiscount && (
                        <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>
                          {item.price}
                        </span>
                      )}
                      <span>{discountedPrice} PKR</span>
                    </td>
                    <td>
                      <a
                        href={generateWhatsAppLink(item.name, discountedPrice, item.customClass)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btn}
                      >
                        Buy
                      </a>
                    </td>
                    <td>
                      <a
                        href={item.pictureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btn}
                      >
                        Picture
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <hr style={{ border: '2px solid black', marginBottom: '20px' }} />
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
