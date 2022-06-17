import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Footer.css";
import { Button, Divider } from "@mui/material";
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
                <p>Facebook</p>
              </Box>
              <Box>
                <p>Instagram</p>
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
                <Button primary variant="contained" className="btn">
                  Book now
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <h3>Links</h3>
              </Box>
              <Box>
                <p>Facebook</p>
              </Box>
              <Box>
                <p>Instagram</p>
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
