import { fetchProducts } from "../../redux/productSlice";
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
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MyPropertiesCard from "../../components/MyPropertiesCard/MyPropertiesCard";

const MyProperties = () => {
  const dispatch = useDispatch();
  const { states, loading, error } = useSelector((state) => state.products);
  const [visibleItems, setVisibleItems] = useState(1); // Default page

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handlePageChange = (event, value) => {
    setVisibleItems(value); // Set new page number
  };

  const itemsPerPage = 3;
  const paginatedData = states.slice(
    (visibleItems - 1) * itemsPerPage,
    visibleItems * itemsPerPage
  );

  const getStatusButton = (status) => {
    switch (status) {
      case "published":
        return (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EFA00F", 
              color: "white",
              textTransform: "capitalize",
              fontSize: "14px",
              borderRadius: "12px",
              padding: "6px 16px",
            }}
          >
            Published
          </Button>
        );
      case "sold":
        return (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f28a30",
              color: "white",
              textTransform: "capitalize",
              fontSize: "14px",
              borderRadius: "12px",
              padding: "6px 16px",
            }}
          >
            Sold
          </Button>
        );
      case "under review":
        return (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f44336", 
              textTransform: "capitalize",
              fontSize: "14px",
              borderRadius: "12px",
              padding: "6px 16px",
            }}
          >
            Under Review
          </Button>
        );
      default:
        return null;
    }
  };

  if (loading)
    return <CircularProgress sx={{ display: "block", margin: "20px auto" }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, maxWidth: '1200px', margin: '0 auto',  }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 'bold',
          // color: '#21616A',
          textAlign: 'left',
        }}
      >
        My Properties
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '16px', overflow: 'hidden',  }}>
        <Table sx={{ minWidth: 650 }} aria-label="property table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#E5F4F2', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
              <TableCell
                sx={{
                  color: '#21616A',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  padding: '16px 24px',
                  borderBottom: 'none',
                }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{
                  color: '#21616A',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  padding: '16px 24px',
                  textAlign: 'center',
                  borderBottom: 'none',
                }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{
                  color: '#21616A',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  padding: '16px 24px',
                  textAlign: 'center',
                  borderBottom: 'none',
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData && paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <TableRow
                  key={item._id}
                  // sx={{
                  //   '&:nth-of-type(odd)': {
                  //     backgroundColor: '#f9f9f9',
                  //   },
                  //   '&:nth-of-type(even)': {
                  //     backgroundColor: '#fff',
                  //   },
                  //   borderBottom: '1px solid #ddd',
                  // }}
                >
                  
                  <TableCell sx={{ padding: '16px 24px', width:1 }}>
                    <MyPropertiesCard item={item} />
                  </TableCell>

                 
                  <TableCell sx={{ padding: '16px', textAlign: 'center' }}>
                    {getStatusButton(item.status)}
                  </TableCell>

                  
                  <TableCell sx={{ padding: '16px', textAlign: 'center' }}>
                    <IconButton aria-label="edit" sx={{ mr: 1 }}>
                      <EditIcon sx={{ color: "#21616A" }} />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon sx={{ color: "#f44336" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: "center", py: 2 }}>
                  <Typography variant="body1">No properties found</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      
      <Pagination
        count={Math.ceil(states.length / itemsPerPage)}
        page={visibleItems}
        onChange={handlePageChange}
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
          '& .MuiPaginationItem-root': {
            borderRadius: '50%',
            border: '1px solid #21616A',
            color: '#21616A',
            '&.Mui-selected': {
              backgroundColor: '#21616A',
              color: '#fff',
            },
          },
        }}
      />
    </Box>
  );
};

export default MyProperties;
