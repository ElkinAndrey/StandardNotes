import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LinkButton = ({ to = "", ...props }) => {
  return (
    <Link to={to}>
      <Button {...props} />
    </Link>
  );
};

export default LinkButton;
