// *Greeting
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Greeting from './components/Greeting';

class App extends Component {
  state = {
    greeting: 'Selamat Datang'
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <Greeting text={this.state.greeting}/>
        <Text>{this.state.greeting}</Text>
      </View>
    )
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

// *Header*

// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Header from './Header';

// const App = () => {
//   return (
//     <View style={StyleSheet.container}>
//       <Header />
//       <Text>Hello!</Text>
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
