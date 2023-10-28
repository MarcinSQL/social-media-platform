import { Container, Toolbar, Box } from "@mui/material";
import Copyright from "./Copyright";
import { ILayoutContent } from "modules/types/dashboard/layout.types";

export default function LayoutContent(props: ILayoutContent) {
  return (
    <Box component="main">
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {props.children}
        <Copyright />
      </Container>
    </Box>
  );
}
