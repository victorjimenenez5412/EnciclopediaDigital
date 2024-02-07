import { Content, Wrapper, Title, Logo } from '../components/layout';
import Button from '../components/controls/Button';
import Colors from '../constants/Colors';

export default function Welcome({ navigation }) {
  const goToLogin = () => {
    navigation.navigate('Login');
  }

  const goToRegister = () => {
    navigation.navigate('Register');
  }

  return (
    <Wrapper backgroundColor={Colors.white}>
      <Content>
        <Logo type="white" />
        <Title color={Colors.green} title="Welcome Back!" />
        <Button onPress={goToLogin} label={"Login"} type="white" />
        <Button onPress={goToRegister} label={"Sign in"} type="white" />
      </Content>
    </Wrapper>
  );
};