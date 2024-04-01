import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: "white",
  overflow: "hidden",
};
const spinTransition = {
  repeat: Infinity,
  ease: "linear",
  duration: 2,
};

const AprilFoolsModal = () => {
  const [open, setOpen] = useState(false);
  const [openAprilFoolModal, setOpenAprilFoolModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAprilFoolModalOpen = () => setOpenAprilFoolModal(true);
  const handleAprilFoolModalClose = () => setOpenAprilFoolModal(false);

  return (
    <div>
      <Image
        src="https://cdn.svgator.com/images/2021/08/logo-animation-example-conversable.gif"
        alt="logo"
        layout="fill"
        objectFit="cover"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Introducing Time Travel Feature!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Go back in time and edit your code before it breaks. Coming soon!
          </Typography>
          <Button onClick={handleAprilFoolModalOpen}>Click Here</Button>
        </Box>
      </Modal>

      <Modal
        open={openAprilFoolModal}
        onClose={handleAprilFoolModalClose}
        aria-labelledby="april-fool-modal-title"
        aria-describedby="april-fool-modal-description"
        closeAfterTransition
      >
        <Box sx={style} className="modalAnimation">
          <Typography
            id="april-fool-modal-title"
            variant="h6"
            component="h2"
            className="blinkingText"
          >
            <Image
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzJxZjZteG42OWs2Z210aDR5OW81aTFyazR2M2cwcWVnY291ZnBzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fLFwwmjKh46kw/giphy.gif"
              alt="logo"
           
              objectFit="cover"
              className="imageapril"
              width={400}
              height={400}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default AprilFoolsModal;
