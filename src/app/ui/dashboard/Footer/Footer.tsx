"use client";

import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      className='footer border-top px-sm-2 py-2'
      sx={{
        width: "100%",
        borderTop: "1px solid",
        borderColor: "divider",
        paddingX: "16px",
        paddingY: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "@media (min-width: 768px)": {
          flexDirection: "row",
          justifyContent: "space-between",
        },
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "@media (min-width: 768px)": {
            flexDirection: "row",
          },
        }}
      >
        <Box>© 2024 Footer.</Box>
      </Container>
    </Box>
  );
}
