import React from 'react';
import { Text, View } from 'react-native';

export default class Instagram extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color:'purple', fontWeight:'900', alignItems:'Center',justifyContent:'center', marginTop: 20 }}>Facebook</Text>
        </View>
      );
    }
  }
