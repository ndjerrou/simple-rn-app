import { View, Text } from 'react-native';

function SettingsScreen(props) {
  console.log(props);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello {props.name}</Text>
      <Text>Settings</Text>
    </View>
  );
}

export default SettingsScreen;
