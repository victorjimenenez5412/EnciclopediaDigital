import { Content, Wrapper, Title, Logo } from '../components/layout';
import Button from '../components/controls/Button';
import Colors from '../constants/Colors';

export default function Welcomeback({ navigation }) {
  const goToWelcome = () => {
    navigation.navigate('Welcome');
  }


  return (
    <Wrapper backgroundColor={Colors.white}>
      <Content>
        <Logo type="white" />
        <Title color={Colors.yellow} title="Encyclopedia of animals" />
        <Title color={Colors.green} title="What do you know about the animal kingdom?" />
        <Button onPress={goToWelcome} label={"Get Started"} type="white" />
      </Content>
    </Wrapper>
  );
};