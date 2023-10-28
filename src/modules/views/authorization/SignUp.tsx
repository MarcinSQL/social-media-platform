import { useContext } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "components/Copyright";
import TextInput from "components/TextInput";
import useSignUp from "modules/logic/authorization/useSignUp";
import Toast from "components/Toast";
import AuthContext from "store/auth-context";

export default function SignUp() {
  const ctx = useContext(AuthContext);
  const { handleSubmit, register, onSubmit, control, goToSignIn } = useSignUp();

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography component="h1" variant="h5">
          Zarejestruj się
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, textAlign: "center" }}
        >
          <TextInput
            control={control}
            type="text"
            required
            label="Nazwa użytkownika"
            {...register("username", { required: true })}
          />
          <TextInput
            control={control}
            type="text"
            required
            label="Email"
            {...register("email", { required: true })}
          />
          <TextInput
            control={control}
            type="text"
            required
            label="Hasło"
            {...register("password", { required: true })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Zarejestruj się
          </Button>
          <Link onClick={goToSignIn} variant="body2" sx={{ cursor: "pointer" }}>
            {"Posiadasz konto? Zaloguj się"}
          </Link>
        </Box>
      </Box>
      <Copyright />
      {ctx.isError && <Toast message={ctx.message} />}
    </Container>
  );
}
