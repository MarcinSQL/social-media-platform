import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Button,
  Link,
} from "@mui/material";
import Copyright from "components/Copyright";
import TextInput from "components/TextInput";
import useSignIn from "modules/logic/authorization/useSignIn";

export default function SignIn() {
  const { handleSubmit, register, onSubmit, control, goToSignUp } = useSignIn();
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
          Zaloguj się
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextInput
            control={control}
            type="text"
            required
            label="Email"
            {...register("email", { required: true })}
          />
          <TextInput
            control={control}
            required
            label="Hasło"
            type="password"
            {...register("password", { required: true })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Zaloguj się
          </Button>
          <Link onClick={goToSignUp} variant="body2" sx={{ cursor: "pointer" }}>
            Nie masz konta? Zarejestruj się
          </Link>
        </Box>
      </Box>
      <Copyright />
      {/* {ctx.isError && <Toast message={ctx.message} />} */}
    </Container>
  );
}
