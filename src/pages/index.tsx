import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import InfoModal from "@/components/infoModal";
import { userDataInterface } from "@/interfaces";

const ChatPage = () => {
  const [open, setOpen] = useState(false);

  const [userData, setUserData] = useState<userDataInterface | null>(null);

  useEffect(() => {
    if (!userData) {
      setOpen(true);
    }
  }, []);
  const handleModalSubmit = (values: userDataInterface) => {
    setUserData(values);
    setOpen(false);
  };
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}></Grid>
      <InfoModal handleSubmit={handleModalSubmit} open={open} />
    </Grid>
  );
};

export default ChatPage;
