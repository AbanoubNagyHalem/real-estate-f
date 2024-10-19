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
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchFilteredPosts } from "../../redux/filterProductSlice";
import img1 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
import img2 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
import img3 from "../../assets/images/unsplash_XbwHrt87mQ0.png";
import { useNavigate } from "react-router-dom";

const cities = [
  { name: "Cairo", img: img1 },
  { name: "Alexandria", img: img2 },
  { name: "Giza", img: img3 },
  { name: "Port Said", img: img1 },
  { name: "Suez", img: img2 },
  { name: "Aswan", img: img3 },
  { name: "Luxor", img: img3 },
  { name: "Tanta", img: img3 },
  { name: "Ismailia", img: img3 },
  { name: "Zagazig", img: img3 },
  { name: "Mansoura", img: img3 },
  { name: "Faiyum", img: img3 },
  { name: "Qena", img: img3 },
  { name: "Sohag", img: img3 },
  { name: "Minya", img: img3 },
  { name: "Damietta", img: img3 },
  { name: "Assiut", img: img3 },
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
              sx={{ cursor: 'pointer' }} // Add pointer cursor for better UX
            >
              <Box className="img-carousel-style">
                <img src={city.img} alt={city.name} width={"300px"} />
              </Box>
              <Typography variant="h4">{city.name}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default CitySlider;
