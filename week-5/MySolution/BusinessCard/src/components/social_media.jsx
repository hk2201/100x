import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

export function SocialMedia(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft: -80,
      }}
    >
      <Link target="_blank" to={props.linkedn}>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          re
          // sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Linkedn
        </Button>
      </Link>
      <Link target="_blank" to={props.twitter}>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          // sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Twitter
        </Button>
      </Link>
    </div>
  );
}
