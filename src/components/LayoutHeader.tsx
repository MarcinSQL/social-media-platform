import { Link } from "@mui/icons-material";
import { AppBar, Avatar, IconButton, Typography } from "@mui/material";
import { SignInLink } from "links";
import { ILayoutHeader } from "modules/types/dashboard/layout.types";
import { useNavigate } from "react-router-dom";

export default function LayoutHeader(props: ILayoutHeader) {
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate(SignInLink);
  };
  return (
    <AppBar
      sx={{
        p: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ pr: 2, pl: 2 }}
      >
        Witaj {props.username}!
      </Typography>
      <IconButton>
          <Avatar
            alt={props.username + "-avatar"}
            src={props.avatarSrc ? props.avatarSrc : "error"}
          />
      </IconButton>
    </AppBar>
  );
}
