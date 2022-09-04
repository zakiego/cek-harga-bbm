import { Box, Container, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  title: string;
  descritpion: string;
  children: React.ReactNode;
}

const Layout = ({ title, descritpion, children }: Props) => {
  return (
    <>
      <NextSeo title={title} description={descritpion} />
      <Box minH="100vh" bg="#F4F6F8">
        <Container maxW="container.xl">
          <Stack>
            <Navbar />
            {children}
            <Footer />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Layout;
