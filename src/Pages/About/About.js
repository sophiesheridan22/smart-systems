import React from "react";
import Header from "../../Components/Header/Header";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <>
      <Header/>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          About
        </Typography>
        <Typography variant="body1" align="center" component="p">
          Welcome to LegendLighting! We are a company that specialises in smart lighting systems which can be controlled from a device or a remote. 
          Our company prides itself on its ability to provide easy to use systems which add ease and comfort to your home. 
          Our systems are easy to use and accessible to all users. 
        </Typography>
        <br/>
        <Typography variant="body1" align="center" component="p">
          At LegendLighting we value our customer experience , we want our customers to be able to easily use our products, 
          and enjoy using them. We want to create a relaxing atmosphere in our users homes, all while remaining as affordable as possible. 
        </Typography>
      </Container>
    </>
  );
};

export default About;