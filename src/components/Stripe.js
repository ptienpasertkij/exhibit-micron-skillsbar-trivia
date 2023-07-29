import Box from "@mui/material/Box";
const Stripe = () => {
  return (
    <Box
      sx={{
        // make background color a gradient of five colors evenly spaced from left to right
        backgroundImage: "linear-gradient(to right, #10a5d3, #87b764, #fbc150, #e7398a, #5b469c)",
        height: { xs: "10px", md: "20px" },
        width: "100%",
      }}
      component="div"
    ></Box>
  );
};

export default Stripe;
