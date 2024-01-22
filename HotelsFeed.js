import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Dimensions
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import Icon, { Icons } from '../Component/Icons';
// import data from 'Dataset/data.json';
import data from '../Dataset/hotelsData';


export default function HotelsFeed({ navigation, category }) {

    console.log(data.length)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => <Card {...item} navigation={navigation} />}
                style={{ backgroundColor: '#FDFAE7', paddingTop: 10, paddingHorizontal: 7 }}
            />
        </SafeAreaView>
    );
}

function Card({ item, navigation }) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('HotelScreen', { data: item });
            }}
            style={{
                backgroundColor: 'white',
                marginBottom: 20,
                marginHorizontal: 10,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.15,
                shadowRadius: 4,
                elevation: 5,
            }}>
            <Image
                source={{ uri: item.rooms[0].roomImages[0]}}
                style={{
                    height: 160,
                    width: 'auto',
                    resizeMode: 'cover',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
            />

            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#4B5563', fontSize: 16, fontWeight: '600' }}>
                        {item.hotelName}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 5,
                    }}>
                    <Image
                        source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/locationIcon.png" }}
                        style={{ width: 15, height: 15 }}
                    />
                    <Text
                        style={{
                            color: '#6B7280',
                            fontSize: 14,
                            fontWeight: '400',
                            marginLeft: 3,
                        }}>
                        {item.address}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 10 }}
                    />
                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                    />
                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                    />
                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                    />
                    <Image
                        source={require('../Assests/stars.png')}
                        style={{ width: 15, height: 15, marginLeft: 5 }}
                    />
                    <Text
                        style={{
                            color: '#6B7280',
                            fontSize: 14,
                            fontWeight: '400',
                            marginLeft: 10,
                        }}>
                        89 Rooms
                    </Text>
                </View>

                <View
                    style={{
                        height: 1.5,
                        width: 'auto',
                        backgroundColor: '#E5E7EB',
                        marginTop: 10,
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 10,
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/routing.png" }}
                            style={{ width: 18, height: 18, marginRight: 5 }}
                        />
                        <Text style={{ color: '#6B7280', fontSize: 14, fontWeight: '400' }}>
                            1.4Kms away{' '}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            type={Icons.Ionicons}
                            name={'business-outline'}
                            color="#6B7280"
                            size={18}
                        />
                        <Text
                            style={{
                                color: '#6B7280',
                                fontSize: 14,
                                fontWeight: '400',
                                marginLeft: 5,
                            }}>
                            Homestay
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FDFAE7',
    },
});
