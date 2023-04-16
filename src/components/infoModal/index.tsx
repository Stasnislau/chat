import * as Yup from "yup";

import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { Modal } from "@mui/material";
import { useFormik } from "formik";
import { userDataInterface } from "@/interfaces";

const InfoModal = () => {
  const initialValues = {
    name: "",
    gender: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const onSubmit = (values: userDataInterface) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
          minWidth: 400,
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <form onSubmit={formik.handleSubmit}>
            <Grid item xs={12}>
              <Typography variant="h6" id="modal-modal-title">
                Welcome to the chat app!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" id="modal-modal-description">
                Please enter your name and gender and click on the "Join" button
                to enter the chat room.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    id="name"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    select={true}
                    label="Gender"
                    variant="outlined"
                    id="gender"
                    name="gender"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    error={
                      formik.touched.gender && Boolean(formik.errors.gender)
                    }
                  >
                    <MenuItem value=""> Select</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mb: 2 }}
              >
                Join
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </Modal>
  );
};

export default InfoModal;
