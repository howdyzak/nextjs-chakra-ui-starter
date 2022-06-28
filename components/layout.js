import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </React.Fragment>
  );
}
