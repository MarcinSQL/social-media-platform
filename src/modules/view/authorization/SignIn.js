import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function SignIn() {
  return <div>
    <form method="POST">
        <Input title="Login" type="text" name="login" />
        <Input title="Password" type="password" name="password" />
        <Button type="submit">Zaloguj</Button>
    </form>
  </div>;
}
