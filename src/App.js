import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Allproducts from './Components/Allproducts';
import Mobiles from './Components/Mobiles';
import Tablets from './Components/Tablets';
import Laptops from './Components/Laptops';
import Headphones from './Components/Headphones';
import Nopage from './Components/Nopage';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'My Shop';
  }, []);

  const products = [
    {
        Name : "IPhone 14",
        Img : "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg",
        Popup : "Descriptions: 15.40 cm (6.1-inch) Super Retina XDR display Advanced camera system for better photos in any light Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos Vital safety technology — Crash Detection calls for help when you can't All-day battery life and up to 20 hours of video playback Industry-leading durability features with Ceramic Shield and water resistance A15 Bionic chip with 5-core GPU for lightning-fast performance. Superfast 5G cellular iOS 16 offers even more ways to personalise, communicate and share.",
        Price : "₹67,999",
        Type : "mobile"
    },
    {
      Name : "Boat Rockers270",
      Img : "https://m.media-amazon.com/images/I/61WqF8Y6HTL._AC_UY218_.jpg",
      Popup : "Features: With 40mm Drivers get ready to immerse in HD auditory experience with super extra bass to get the day going Plug into your rhythm with style via the wireless Bluetooth headset and carry the vibe wherever you go Stay immersed into Nirvana for extended durations with a playtime of up to 8 hours Its lightweight and ergonomic design offers the comfort and ease while you listen to your favourite artists and have fun.",
      Price : "₹2,999",
      Type : "headphone"
    },
    {
      Name : "Acer i7",
      Img : "https://m.media-amazon.com/images/I/51Z-CqWUN1L._AC_UY218_.jpg",
      Popup : "Descriptions: High Performance :Intel Core i5 1135G7 Processor with Intel Iris Xe Graphics Internal Specifications:8 GB DDR4 SDRAM support: Up to 32 GB Display: 14 Full HD 1920 x 1080 resolution Antiglare LED backlit TFT LCD, 16:9 aspect ratio Storage: 512 GB SSD, M.2 Gen 3 PCIe, Various Connectivity Options : HDMI, USB 3.2, Gen 1, Type A & C ports, Fast connectivity through Gigabit LAN Othe Special Features: Camera Shutter, USB 3.2 Reversible Type-C Connector, 1.49 KG. ",
      Price : "₹52,999",
      width : "230",
      height:"220",
      Type : "laptop"
    },
    {
      Name : "IPad ProMax",
      Img : "https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_UL320_.jpg",
      Popup :"Descriptions: Brilliant 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color M2 chip with 8-core CPU and 10-core GPU 12MP Wide camera, 10MP Ultra Wide back camera, and LiDAR Scanner for immersive AR 12MP Ultra Wide front camera with Center Stage Stay connected with ultrafast Wi-Fi 6E.",
      Price : "₹83,999",
      width:"200",
      Type : "tablet"
    },
    {
        Name : "Samsung M04",
        Img : "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UY218_.jpg",
        Popup :"Descriptions: Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1 13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came 16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color 5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
        Price : "₹6,999",
        Type : "mobile"
    },
    {
      Name : "Redmi A1",
      Img : "https://m.media-amazon.com/images/I/81UT07JsBqL._AC_UY218_.jpg",
      Popup :"Descriptions: Display: 16.56cm HD+ Scratch resistant display Processor: MediaTek Helio A22 processor; up to 2.0GHz Camera: 8MP Dual camera | 5MP Front camera Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G) Battery: 5000 mAh large battery with 10W in-box charger.",
      Price : "₹5,699",
      Type : "mobile"
    },
    {
      Name : "Samsung Tab A7",
      Img : "https://m.media-amazon.com/images/I/91veRYPjpeL._AC_UY218_.jpg",
      Popup :"Descriptions: 27.94 cm (11 inch) Cinematic Display, 2560x1600,276ppi,LTPS TFT Screen With 120Hz Refresh Rate Android 12, Quad speakers with Dolby Atmos, Powerful Snapdragon 8th Gen Chipset 13/6MP (Dual) + Flash Rear Camera ,12MP (Ultra Wide) Front Camera.",
      Price : "₹43,999",
      width:"200",
      height:"225",
      Type : "tablet"
    },
    {
      Name : "Sony U-7000",
      Img : "https://m.media-amazon.com/images/I/51i+LdztEBL._AC_UY218_.jpg",
      Popup : "Description: Digital noise cancelling: Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation;Voice assistant: Alexa, Google Assistant & Siri enabled (In-built) for voice access to music, information and more. Activate with a simple touch Speak-to-chat: Headphones use an array of smart technologies to create a seamless, hands-free listening experience.",
      Price : "₹1,899",
      Type : "headphone"
    },
    {
      Name : "Sony MaxBook",
      Img : "https://m.media-amazon.com/images/I/61Newaer7kS._AC_UY218_.jpg",
      Popup : "Descriptions: Processor: 11th Gen Intel Tiger Lake Core i5-11320H processor| Speed: 3.1 GHz(base) - 4.4 GHz(max) | 4 cores | 8 Threads | 8 MB Cache Display: 35.56 centimeters IPS QHD+ resolution (2560x1600)| 300 nits brightness |16:10 aspect ratio, 100% sRGB,215 PPI, 1000:1 contrast ratio | Anti Glare | TUV low Blue light Memory & Storage: 16GB DDR4 3200 MHz | 512GB PCIe NVMe M.2 SSD.",
      Price : "₹62,999",
      width : "230",
      height:"220",
      Type : "laptop"
    },
    {
      Name : "IPhone 14Pro Max",
      Img : "https://m.media-amazon.com/images/I/61lKQWyMdDL._AC_UY218_.jpg",
      Popup :"Descriptions: Display: 16.56cm HD+ Scratch resistant display Processor: MediaTek Helio A22 processor; up to 2.0GHz Camera: 8MP Dual camera | 5MP Front camera Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G) Battery: 5000 mAh large battery with 10W in-box charger.",
      Price : "₹1,27,999",
      Type : "mobile"
    },
    {
      Name : "Readmi Note 12",
      Img : "https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UY218_.jpg",
      Popup :"Descriptions: Display: 16.56cm HD+ Scratch resistant display Processor: MediaTek Helio A22 processor; up to 2.0GHz Camera: 8MP Dual camera | 5MP Front camera Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G) Battery: 5000 mAh large battery with 10W in-box charger.",
      Price : "₹10,999",
      Type : "mobile"
    },
    {
      Name : "Readmi 10",
      Img : "https://m.media-amazon.com/images/I/81OZGH4fZiL._AC_UY218_.jpg",
      Popup :"Descriptions: Display: 16.56cm HD+ Scratch resistant display Processor: MediaTek Helio A22 processor; up to 2.0GHz Camera: 8MP Dual camera | 5MP Front camera Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G) Battery: 5000 mAh large battery with 10W in-box charger.",
      Price : "₹19,999",
      Type : "mobile"
    },
    {
      Name : "IQ00 Z6",
      Img : "https://m.media-amazon.com/images/I/61SpA599GgL._AC_UY218_.jpg",
      Popup :"Descriptions: Display: 16.56cm HD+ Scratch resistant display Processor: MediaTek Helio A22 processor; up to 2.0GHz Camera: 8MP Dual camera | 5MP Front camera Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G) Battery: 5000 mAh large battery with 10W in-box charger.",
      Price : "₹39,999",
      Type : "mobile"
    },
]

  let m = products.filter((list)=>
    list.Type === "mobile"
  ).map((a)=>{
      return a
  })

  let h = products.filter((list)=>
  list.Type === "headphone"
 ).map((a)=>{
    return a
 })

 let l = products.filter((list)=>
 list.Type === "laptop"
 ).map((a)=>{
   return a
 })

 let t = products.filter((list)=>
 list.Type === "tablet"
 ).map((a)=>{
   return a
 })

  return (
    <>
      <Navbar></Navbar>
       <Routes>
          <Route path="/" element={<Allproducts Products={products} />}/>
          <Route path="Mobiles" element={<Mobiles mobiles={m}/>} />
          <Route path="Tablets" element={<Tablets tablet={t}/>} />
          <Route path="Laptops" element={<Laptops laptop={l} />} />
          <Route path="Headphones" element={<Headphones headphone={h} />} />
          <Route path="*" element={<Nopage />} />
       </Routes>
    </>
  );
}

export default App;
