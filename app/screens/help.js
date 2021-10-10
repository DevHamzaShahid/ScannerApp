import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons'
class Help extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      imagess: [
        { src: require('../components/assets/images/images.png'), key: '1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ' },
        { src: require('../components/assets/images/image2.jpg'), key: '2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ' },
        { src: require('../components/assets/images/images.png'), key: '3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ' },
        { src: require('../components/assets/images/image2.jpg'), key: '4', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ' },
        { src: require('../components/assets/images/images.png'), key: '5', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ' },
      ]
    }
  }

  _renderItem({ item, index }) {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        // padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}>
        <Image source={item.src} style={{
          width: 260,
          height: 260,
          borderWidth: 2,
          borderColor: '#d35647',
          resizeMode: 'contain',
          margin: 8
        }} />
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          {item.text}
        </Text>
      </View>

    )
  }
  _renderItem1({ item, index }) {
    return (
      <View style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        // padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}>
        <Image source={item.src} style={{
          width: 260,
          height: 260,
          borderWidth: 2,
          borderColor: '#d35647',
          resizeMode: 'contain',
          margin: 8
        }} />
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          {item.text}
        </Text>
      </View>
    )
  }

  render() {
    return (

      <View style={{ flex: 1, }}>
        <View style={{ backgroundColor: '#06692c', height: 50, flexDirection: 'row', }}>
          <Icon name="arrow-back" size={30} color="#fff" onPress={() => this.props.navigation.goBack()} style={{ alignSelf: 'center', justifyContent: 'flex-start', paddingLeft: 15 }} />
          <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 20, paddingLeft: 20 }}>Help</Text>
        </View>
        <ScrollView>
          <SafeAreaView style={{ backgroundColor: '#fff', paddingTop: 50, }}>

            <Image source={require('../components/assets/images/info.png')} style={{
              alignSelf: 'center',
              width: 150,
              height: 150,
              resizeMode: 'contain',
              margin: 8,
              marginBottom: 50
            }} />
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#e3e2e1' }} />
            <Text style={{ fontSize: 20, color: '#06692c', alignSelf: 'center', paddingTop: 20 }}>What To Check For</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>

              <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.imagess}
                sliderWidth={300}
                itemWidth={300}
                renderItem={this._renderItem}
                onSnapToItem={index => this.setState({ activeIndex: index })} />
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#e3e2e1', paddingTop: 20 }} />
            <Text style={{ fontSize: 20, color: '#948c8b', alignSelf: 'center', paddingTop: 40 }}>Additional Tips</Text>
            <Text style={{ textAlign: 'center', paddingTop: 20, fontSize: 16, color: '#948c8b', marginBottom: 30 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 ,paddingBottom:50}}>

              <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.imagess}
                sliderWidth={300}
                itemWidth={300}
                renderItem={this._renderItem1}
                onSnapToItem={index => this.setState({ activeIndex: index })} />
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>

    );
  }
}

export default Help;