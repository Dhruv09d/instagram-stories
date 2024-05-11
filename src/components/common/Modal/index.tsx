import { Box, Modal as MuiModal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles";
import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  open: boolean;
  heading?: string;
  onCloseModal?: () => void;
};

const Modal = ({ children, open, heading, onCloseModal }: ModalProps) => {
  return (
    <MuiModal open={open} sx={styles.wrapper}>
      <>
        <Box sx={styles.header}>
          {heading && <Box sx={styles.heading}>{heading}</Box>}
          {onCloseModal && (
            <CloseIcon sx={styles.closeIcon} onClick={onCloseModal} />
          )}
        </Box>
        <Box sx={styles.children}>{children}</Box>
      </>
    </MuiModal>
  );
};

export default Modal;
