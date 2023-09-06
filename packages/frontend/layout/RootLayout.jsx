import { Grid, GridItem } from '@chakra-ui/react';

// components
import Navbar from '@/components/NavBar';
import Sidebar from '@/components/SideBar';

export default function RootLayout({ children }) {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem as="aside" colSpan="1" bg="black" minHeight="100vh" p="30px">
        <Sidebar />
      </GridItem>

      {/* main content & navbar */}
      <GridItem as="main" colSpan="5" p="40px">
        {/* <Navbar /> */}
        {children} {/* This is where the main page content will be rendered */}
      </GridItem>
    </Grid>
  );
}
