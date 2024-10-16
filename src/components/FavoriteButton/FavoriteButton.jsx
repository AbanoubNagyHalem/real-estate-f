import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addFavorite, removeFavorite } from "../../redux/favoriteSlice"; // Update the path based on your structure

const FavoriteButton = ({ postId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((favorite) => favorite._id === postId);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(postId)); // Remove from favorites
    } else {
      dispatch(addFavorite(postId)); // Add to favorites
    }
  };

  return (
    <div onClick={handleFavoriteClick}>
      {isFavorite ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "#fff" }} />
      )}
    </div>
  );
};

export default FavoriteButton;
