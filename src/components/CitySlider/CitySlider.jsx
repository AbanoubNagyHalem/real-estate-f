// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Box, Typography } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { fetchFilteredPosts } from "../../redux/filterProductSlice";
// import img1 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
// import img2 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
// import img3 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const cities = [
//   { name: "Cairo", img: img1 },
//   { name: "Alexandria", img: img2 },
//   { name: "Giza", img: img3 },
//   { name: "Port Said", img: img1 },
//   { name: "Suez", img: img2 },
//   { name: "Aswan", img: img3 },
//   { name: "Luxor", img: img3 },
//   { name: "Tanta", img: img3 },
//   { name: "Ismailia", img: img3 },
//   { name: "Zagazig", img: img3 },
//   { name: "Mansoura", img: img3 },
//   { name: "Faiyum", img: img3 },
//   { name: "Qena", img: img3 },
//   { name: "Sohag", img: img3 },
//   { name: "Minya", img: img3 },
//   { name: "Damietta", img: img3 },
//   { name: "Assiut", img: img3 },

// ];

// function CitySlider() {

//   const dispatch = useDispatch();
//   const [selectedCity, setSelectedCity] = useState("");
//   const [searchParams, setSearchParams] = useSearchParams();

//   const navigate = useNavigate()

//   const handleCitySelect = async (city) => {
//     setSelectedCity(city);
//     const query = {
//       city: city.toLowerCase(),
//     };
//     await dispatch(fetchFilteredPosts(query));
//     console.log(query)
//   };

//   const handleFilter = async () => {
//     setSearchParams(query);
//     console.log(query);

//     const filter = dispatch(fetchFilteredPosts(query));
//     navigate(
//       `/properties?city=${query.city}`
//     );

//     console.log(filter);
//   };

//   return (
//     <Box sx={{ width: "100%", mt: 4 }}>

//       <Swiper
//         modules={[Autoplay, Pagination]}
//         pagination={{ clickable: true }}
//         spaceBetween={10}
//         loop={true}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           340: { slidesPerView: 1, spaceBetween: 10 },
//           768: { slidesPerView: 2, spaceBetween: 10 },
//           1024: { slidesPerView: 3, spaceBetween: 10 },
//         }}
//         className="mySwiper"
//       >
//         {cities.map((city) => (
//           <SwiperSlide key={city.name} onClick={handleFilter}>
//             <Box className="card-style" onClick={() => handleCitySelect(city.name)}>
//               <Box className="img-carousel-style">
//                 <img src={city.img} alt={city.name} width={"300px"}/>
//               </Box>
//               <Typography variant="h4">{city.name}</Typography>
//             </Box>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// }

// export default CitySlider;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Box, CardMedia, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchFilteredPosts } from "../../redux/filterProductSlice";
import img1 from "../../assets/images/cairo.jpg";
import img2 from "../../assets/images/alex.jpg";
import img3 from "../../assets/images/giza.jpg";
import img4 from "../../assets/images/port-said.jpg";
import img5 from "../../assets/images/suez.jpg";
import img6 from "../../assets/images/aswan.jpg";
import img7 from "../../assets/images/luxor.jpg";
import img8 from "../../assets/images/tanta.jpg";
import img9 from "../../assets/images/ismailia.jpg";
import img10 from "../../assets/images/zagazig.jpg";
// import img11 from "../../assets/images/mansoura.jpg";
// import img11 from "../../assets/images/fayoum.jpg";
// import img11 from "../../assets/images/Qena.jpg";
// import img11 from "../../assets/images/mansoura.jpg";
// import img11 from "../../assets/images/mansoura.jpg";
// import img11 from "../../assets/images/mansoura.jpg";

import { useNavigate } from "react-router-dom";

const cities = [
  { name: "Cairo", img: img1 },
  { name: "Alexandria", img: img2 },
  { name: "Giza", img: img3 },
  { name: "Port Said", img: img4 },
  { name: "Suez", img: img5 },
  { name: "Aswan", img: img6 },
  { name: "Luxor", img: img7 },
  { name: "Tanta", img: img8 },
  { name: "Ismailia", img: img9 },
  { name: "Zagazig", img: img10 },
  // { name: "Mansoura", img: img11 },
  // { name: "Faiyum", img: img12 },
  // { name: "Qena", img: img13 },
  // { name: "Sohag", img: img14 },
  // { name: "Minya", img: img15 },
  // { name: "Damietta", img: img16 },
  // { name: "Assiut", img: img17 },
];

function CitySlider() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCitySelect = async (city) => {
    const query = {
      city: city.toLowerCase(),
    };

    // Dispatch the filtered posts action
    await dispatch(fetchFilteredPosts(query));
    // Navigate to the properties page with query parameters
    navigate(`/properties?city=${query.city}`);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
        }}
        className="mySwiper"
      >
        {cities.map((city) => (
          <SwiperSlide key={city.name}>
            <Box
              className="card-style"
              onClick={() => handleCitySelect(city.name)}
              sx={{ cursor: "pointer" }} 
            >
              <Box className="img-carousel-style">
                <Box
                  component="img"
                  sx={{
                    width: 350,
                    height: "500px",
                    borderRadius: "8px",
                    boxShadow: 3,
                    objectFit: "cover",
                  }}
                  alt={city.name}
                  src={city.img}
                />
              </Box>
              <Box >
              <Typography variant="h5" sx={{ width:1, position: "absolute", bottom:2, left:2, zIndex:2, color:"#fff" }}>
                {city.name}
              </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default CitySlider;