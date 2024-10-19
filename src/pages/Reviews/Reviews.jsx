// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchReviews } from '../../redux/reviewSlice';

// const Reviews = () => {
//   const dispatch = useDispatch();
//   const {reviews, status, error } = useSelector((state) => state.reviews)

//   useEffect(() => {
//     dispatch(fetchReviews());
//   }, [dispatch]);

//   // Handle loading state
//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Reviews</h2>
//       {reviews.length > 0 ? (
//         reviews.map((review, index) => (
//           <div key={index} style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}>
//             <h3>{review.postTitle}</h3>
//             <p>{review.comment}</p>
//             <small>{new Date(review.commentDate).toLocaleString()}</small>
//           </div>
//         ))
//       ) : (
//         <p>No reviews found.</p>
//       )}
//     </div>
//   );
// };

// export default Reviews;

import { fetchReviews } from "../../redux/reviewSlice";
// import { fetchReviews, removeReview } from "../../redux/reviewSlice";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  CircularProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Reviews = () => {
  const dispatch = useDispatch();
  const { reviews, status, error } = useSelector((state) => state.reviews);
  const [visibleItems, setVisibleItems] = useState(1); // Set initial page to 1

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  // Handle removing a review
  const handleRemoveReview = (postId) => {
    dispatch(removeReview(postId));
    dispatch(fetchReviews());
  };

  // Handle page change for pagination
  const handlePageChange = (event, value) => {
    setVisibleItems(value);
  };

  // Define items per page
  const itemsPerPage = 3;
  const paginatedData = Array.isArray(reviews)
    ? reviews.slice(
        (visibleItems - 1) * itemsPerPage,
        visibleItems * itemsPerPage
      )
    : [];

  // Loading state
  if (status === "loading") {
    return <CircularProgress sx={{ display: "block", margin: "20px auto" }} />;
  }

  // Error state
  if (status === "failed") {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box
      sx={{ padding: { xs: 2, md: 4 }, maxWidth: "1200px", margin: "0 auto" }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "#21616A",
          textAlign: "left",
        }}
      >
        My Reviews
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 3, borderRadius: "16px", overflow: "hidden" }}
      >
        <Table sx={{ maxWidth: 1 }} aria-label="property table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#E5F4F2",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            >
              <TableCell
                sx={{
                  color: "#21616A",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "16px 24px",
                  borderBottom: "none",
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  color: "#21616A",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "16px 24px",
                  borderBottom: "none",
                  textAlign: "right",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <TableRow
                  key={item._id}
                >
                  <TableCell sx={{ padding: "16px 24px", width: 1 }}>

                    {paginatedData.length > 0 ? (
                      paginatedData.map((review) => (
                        <TableRow
                          key={review._id}
                          sx={{
                            "&:nth-of-type(odd)": {
                              backgroundColor: "#f9f9f9",
                            },
                            "&:nth-of-type(even)": { backgroundColor: "#fff" },
                            borderBottom: "1px solid #ddd",
                          }}
                        >
                          <TableCell sx={{ padding: "16px 24px", width: 1 }}>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold" }}
                            >
                              {review.postTitle}
                            </Typography>

                            <Typography
                              variant="body1"
                              sx={{ marginTop: "8px" }}
                            >
                              {review.comment}
                            </Typography>

                            <Typography
                              variant="caption"
                              sx={{
                                marginTop: "4px",
                                display: "block",
                                color: "text.secondary",
                              }}
                            >
                              {new Date(review.commentDate).toLocaleString()}
                            </Typography>
                          </TableCell>

                          <TableCell
                            sx={{ padding: "16px", textAlign: "right" }}
                          >
                            {/* <IconButton
                              aria-label="delete"
                              onClick={() => handleRemoveReview(review._id)}
                            >
                              <DeleteIcon
                                sx={{
                                  color: "#f44336",
                                  "&:hover": {
                                    color: "#EFA00F",
                                  },
                                }}
                              />
                            </IconButton> */}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={2}
                          sx={{ textAlign: "center", py: 2 }}
                        >
                          <Typography variant="body1">
                            No Reviews found
                          </Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableCell>
                  {/* <TableCell sx={{ padding: "16px", textAlign: "right" }}>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleRemoveReview(item._id)}
                    >
                      <DeleteIcon
                        sx={{
                          color: "#f44336",
                          "&:hover": {
                            color: "#EFA00F",
                          },
                        }}
                      />
                    </IconButton>
                  </TableCell> */}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} sx={{ textAlign: "center", py: 2 }}>
                  <Typography variant="body1">No Reviews found</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={
          Array.isArray(reviews) && reviews.length > 0
            ? Math.ceil(reviews.length / itemsPerPage)
            : 0
        }
        page={visibleItems}
        onChange={handlePageChange}
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            borderRadius: "50%",
            border: "1px solid #21616A",
            color: "#21616A",
            "&.Mui-selected": {
              backgroundColor: "#21616A",
              color: "#fff",
            },
          },
        }}
      />
    </Box>
  );
};

export default Reviews;
