import { useState } from "react";
import { Content, Wrapper, Title, Logo } from "../components/layout";
import FormItem from "../components/controls/FormItem";
import Button from "../components/controls/Button";
import { registerEmailPass } from "../services/firebase";

export default function Register({ navigation }) {
  const [user, setUser] = useState({
    email: "",
    full_name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const registerUser = async () => {
    setLoading(true);
    const result = await registerEmailPass(user);
    if (result) {
      setUser({
        email: "",
        full_name: "",
        password: "",
      });
      setLoading(false);
      navigation.navigate("Login");
    } else {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Content>
        <Logo />
        <Title title="Register new account" />
        <FormItem
          value={user.email}
          label="E-mail"
          keyboardType="email-address"
          onChange={(value) =>
            setUser((prev) => ({ ...prev, email: value.trim() }))
          }
        ></FormItem>
        <FormItem
          value={user.full_name}
          label="Full name"
          onChange={(value) =>
            setUser((prev) => ({ ...prev, full_name: value }))
          }
        ></FormItem>
        <FormItem
          secure={true}
          label="Password"
          value={user.password}
          onChange={(value) =>
            setUser((prev) => ({ ...prev, password: value.trim() }))
          }
        ></FormItem>
        <Button onPress={registerUser} label={"SIGN IN"} isLoading={loading} />
        <Button onPress={goToLogin} label={"LOG IN"} />
      </Content>
    </Wrapper>
  );
}