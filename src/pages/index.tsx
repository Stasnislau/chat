import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";

import InfoModal from "@/components/infoModal";
import { useState } from "react";

const ChatPage = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}></Grid>
      <InfoModal />
    </Grid>
  );
};

export default ChatPage;
