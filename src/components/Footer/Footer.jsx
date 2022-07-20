import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Footer.css";
import {  Divider } from "@mui/material";
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="footer">
      <Box className="wrapper">
        <Container maxWidth="lg">
          <Grid container spacing={5} className="footer-top">
            <Grid item xs={12} sm={4}>
              <Box>
                <h3>Links</h3>
              </Box>
              <Box>
                <a href="https://www.instagram.com/oxotel/" target="blank">
                  Facebook
                </a>
              </Box>
              <Box>
                <a href="https://www.instagram.com/oxotel/" target="blank">
                  Instagram
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <h3>Do you have any queries?</h3>
              </Box>
              <Box>
                <p>contact@us.com</p>
              </Box>
              <Box>
                <p>+91 9999 999 999</p>
              </Box>
              <Box>
                <button primary variant="contained" className="hero_btn">
                  Book now
                </button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <h3>Links</h3>
              </Box>
              <Box>
                <Link to="/about-us">
                  About Us
                </Link>
              </Box>
              <Box>
                <Link to="/partner">
                  Partner
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Divider />
          <Box className="brandname">
            Copyright ©2022 hostelMe LLC. All rights reserved.
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
