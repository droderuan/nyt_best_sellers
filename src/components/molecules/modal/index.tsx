interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const styles = `fixed ${
    !open ? "hidden" : ""
  } top-0 left-0 z-50 w-screen h-screen backdrop-blur flex flex-col items-center justify-center`;

  return (
    <div suppressHydrationWarning className={styles}>
      <div className="w-3/4 h-3/4 bg-slate-50 rounded flex flex-col justify-center items-center">
        <div className="w-3/4 h-3/4 flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
