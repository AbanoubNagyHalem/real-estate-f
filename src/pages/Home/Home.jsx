import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { useEffect } from "react";
import Typography from '@mui/material/Typography';

const Home = ({}) => {
  const dispatch = useDispatch()
  const {states, loading, error} = useSelector((state)=> state.products)
  useEffect(()=> {
    dispatch(fetchProducts())
    console.log(states);
    
  },[])


  return (
    <div>
      <Typography variant="h1">Posts List</Typography>
      
      {states ? (
        <ul>
          {states?.map((post) => (
            <div key={post._id}>
              <Typography variant="subtitle1">{post.title}</Typography>
            </div>
          ))}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );

};


export default Home;



// "_id": "6709422ee7ccb19f7793358c",
// "title": "Cozy Villa for Sale",
// "desc": "A beautiful villa with sea views.",
// "price": 500000,
// "address": "456 Beachside Avenue",
// "city": "Alexandria",
// "bedroom": 4,
// "bathroom": 3,
// "latitude": "31.2001",
// "longitude": "29.9187",
// "type": "buy",
// "property": "villa",
// "userId": {
//   "_id": "670912ced104c83156609bf0",
//   "username": "omar"