import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
    </div>
  );
}
