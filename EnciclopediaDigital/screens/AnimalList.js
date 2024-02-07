import React from 'react';
import { View, Text, FlatList, TouchableOpacity, } from 'react-native';
import { Content, Wrapper, Title, Logo } from '../components/layout';
import Colors from '../constants/Colors';
import Button from '../components/controls/Button';


const data = [
  { id: '1', name: 'Elefante',},
  { id: '2', name: 'León',},
  { id: '3', name: 'Girafa',},
  { id: '4', name: 'Tigre',},
];

export default function AnimalList({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Tiger')}>
      <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontSize: 18 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
 

  return (
    <Wrapper backgroundColor={Colors.white}>
      <Content>
        <View>
        <Logo type="white" />
        <Title color={Colors.yellow} title="Encyclopedia of animals" />
        <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
      <View style={{ alignItems: 'center', marginTop: 20}}>
       <Button label={"BACK"}
        color="white" 
        onPress={() => navigation.goBack("Dashboard")} />
        </View>
        </View>
      </Content>
    </Wrapper>
  );
};