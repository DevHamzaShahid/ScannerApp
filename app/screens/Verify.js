import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons'
class Verify extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (

            <View style={{ flex: 1, }}>
                <View style={{ backgroundColor: '#06692c', height: 50, flexDirection: 'row', }}>
                    <Icon name="arrow-back" size={30} color="#fff" onPress={() => this.props.navigation.goBack()} style={{ alignSelf: 'center', justifyContent: 'flex-start', paddingLeft: 15 }} />
                </View>

                <SafeAreaView style={{ backgroundColor: '#fff', marginTop: 50, borderRadius: 15, elevation: 3, width: '95%',alignSelf:'center' }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 30, }} >Verified</Text>
                        <Icon name="checkmark-circle-outline" size={50} color="green" style={{ alignSelf: 'center', justifyContent: 'flex-start', paddingLeft: 15 }} />
                    </View>
                    <Text style={{ alignSelf: 'center', fontSize: 20, color: 'gray' }} >This product is verified</Text>
                    <Text style={{ alignSelf: 'center', paddingTop: 10, fontSize: 16, fontWeight: 'bold' }}>Activated by:</Text>
                    <Text style={{ alignSelf: 'center', fontSize: 16 }}>Scannerapp Demo</Text>
                    <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.Headings}>Serial No:</Text>
                            <Text style={styles.detail}>43564565576W2</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
                            <Text style={styles.Headings}>Activated at:</Text>
                            <Text style={styles.detail}>monday Aug 21 2021</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Headings}>Name:</Text>
                            <Text style={styles.detail}>Demo prodduct</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
                            <Text style={styles.Headings}>Quantity:</Text>
                            <Text style={styles.detail}>1</Text>
                        </View>

                        <Text style={styles.Headings}>Description:</Text>
                        <Text style={styles.detail}>nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos </Text>

                    </View>

                </SafeAreaView>

            </View>

        );
    }
}

export default Verify;
const styles = StyleSheet.create({
    Headings: {
        justifyContent: 'flex-start', fontSize: 16, fontWeight: 'bold'
    },
    detail: {
        fontSize: 16,
        paddingLeft: 10
    }
}
)