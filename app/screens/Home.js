import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Dimensions,
  StatusBar

} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation'
import { TextInput } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Value } from 'react-native-reanimated';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torch: false,
      topbar: false,
    }
  }


  onSuccess = e => {
  
    // Linking.openURL(e.data)
    // this.scanner.reactivate()
    this.props.navigation.navigate('Verify');
    this.scanner.reactivate()
  };

  render() {
    console.log(this.state.torch)
    return (
      <View style={{ flex: 1, backgroundColor: '#06692c' }}>
        <StatusBar backgroundColor="#06692c" barStyle="light-content" />
        {this.state.topbar ?
          <View style={{}}>
            <View style={{ backgroundColor: '#06692c', }}>
              <Text style={{ color: '#fff', textAlign: 'center', padding: 10, fontSize: 20 }}>Enter serial:</Text>

              <TextInput
                style={{
                  height: 45,
                  width: '80%',
                  alignSelf: 'center',
                  borderColor: 'gray',
                  borderWidth: 1,
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  borderRadius: 25,
                }}
                underlineColor='transparent'

                right={<TextInput.Icon size={28} name="send" color={'#13fa07'} />}
                onChangeText={(Value) => { console.log(Value) }}
              />
            </View>
            <View style={{ height: 100, backgroundColor: '#06692c', flexDirection: 'row', marginBottom: 30, justifyContent: 'space-between' }}>
              <View style={{ justifyContent: 'flex-start', alignSelf: 'center' }}>
                <Icon name="page-search" size={35} color="#fff" onPress={() => this.setState({ topbar: !this.state.topbar })} style={{ paddingLeft: 15 }} />
              </View>
              <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}>QR Scan</Text>
              <View style={{ justifyContent: 'flex-end', alignSelf: 'center' }}>
                <Icon name="info" size={35} color="#fff" onPress={() => this.props.navigation.navigate('Help')} style={{ paddingRight: 15 }} />
              </View>
            </View>
          </View>

          :
          <View style={{ height: 100, backgroundColor: '#06692c', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ justifyContent: 'flex-start', alignSelf: 'center' }}>
              <Icon name="page-search" size={30} color="#fff" onPress={() => this.setState({ topbar: !this.state.topbar })} style={{ paddingLeft: 15 }} />
            </View>
            <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}>QR Scan</Text>

            <View style={{ justifyContent: 'flex-end', alignSelf: 'center' }}>
              <Icon name="info" size={35} color="#fff" onPress={() => this.props.navigation.navigate('Help')} style={{ paddingRight: 15 }} />
            </View>
          </View>}
        <View style={{ flex: 0.8 }}>
          <QRCodeScanner
            ref={(node) => { this.scanner = node }}
            onRead={this.onSuccess}
            showMarker
            markerStyle={{ borderColor: '#b5c4b5', borderWidth: 10, opacity: 0.25, borderRadius: 10 }}
            flashMode={this.state.torch ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
            containerStyle={{}}
            cameraStyle={{ height: Dimensions.get('window').height / 1.15, position: 'absolute' }}
            // bottomViewStyle={{

            // }}
            // topContent={

            // }
            bottomContent={
              <TouchableOpacity onPress={() => { this.setState({ torch: !this.state.torch }) }}>
                <Icon name="lightbulb" size={50} color="#fff" style={{ marginTop: Dimensions.get('window').height / 4 }} />
              </TouchableOpacity>
            }
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
