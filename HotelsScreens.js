import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  Linking,
  ToastAndroid,
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import HrLine from '../Component/HrLine';

function renderImage({item}) {
  return (
    <View style={{width: winWidth, height: 280}}>
      <Image source={{uri: item}} style={{width: winWidth, height: 280}} />
    </View>
  );
}

export default function HotelScreen({navigation, route}) {
  const {data} = route.params;

  console.log(data.rooms);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FDFAE7'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
      <TouchableOpacity
        style={styles.backdrop}
        onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/back.png',
          }}
          style={{width: 27, height: 27}}
        />
      </TouchableOpacity>

      <View style={{flex: 1}}>
        <ScrollView>
          <FlatList
            data={data.rooms[0].roomImages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderImage}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          />

          <View style={styles.indicators}>
            <View style={styles.circles} />
            <View style={styles.circles} />
            <View style={styles.circles} />
            <View style={styles.circles} />
          </View>

          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                color: 'black',
              }}>
              {data.hotelName}
            </Text>

            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 5,
              }}>
              {data.address}
            </Text>

            <View
              style={{
                backgroundColor: '#ddd',
                width: winWidth - 20,
                height: 2,
                marginTop: 10,
              }}
            />

            <HrLine />

            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                color: 'black',
                marginTop: 5,
              }}>
              About the Place
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 5,
              }}>
              {data.about}
            </Text>

            <View
              style={{
                backgroundColor: '#ddd',
                width: winWidth - 20,
                height: 2,
                marginTop: 10,
              }}
            />

            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                color: 'black',
                marginTop: 10,
              }}>
              Why to chose us ?
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assests/hi1.png')}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                Clean, fresh vibe
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assests/hi2.png')}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                Guest Friendly
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assests/hi3.png')}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                Rated for high service and staff
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#ddd',
                width: winWidth - 20,
                height: 2,
                marginTop: 10,
              }}
            />

            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                color: 'black',
                marginTop: 10,
              }}>
              Amenities
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assests/hi4.png')}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                TV
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assests/hi5.png')}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                Free Wi-Fi
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assests/hi6.png')}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                CCTV
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assests/hi7.png')}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                24*7 check-in
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assests/hi8.png')}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                Laundry
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#ddd',
                width: winWidth - 20,
                height: 2,
                marginTop: 10,
              }}
            />

            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                color: 'black',
                marginTop: 10,
              }}>
              Cancellation Policies
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assests/hi9.png')}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                Free Cacellation Before 24 Hours
              </Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
              <Image
                source={require('../Assests/hi10.png')}
                style={{width: 23, height: 23, marginTop: 5}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 2,
                  paddingLeft: 5,
                  marginRight: 15,
                }}>
                If the reservation is cancelled 24 hours or less before
                check-in, the cancellation fee is 100%.{' '}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#ddd',
                width: winWidth - 20,
                height: 2,
                marginTop: 10,
                marginBottom: 10,
              }}
            />

            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                color: 'black',
                marginTop: 10,
              }}></Text>

            <View
              style={{
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 10,
                // alignItems: 'center',
                backgroundColor: 'white',
                elevation: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'lightpink',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image
                  source={{uri: data.rooms[0].roomImages[0]}}
                  style={{
                    width: winWidth - 40,
                    height: 200,
                    // marginTop: 10,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'lightgreen',
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    color: 'black',
                    marginTop: 10,
                  }}>
                  {data.rooms[0].name}
                </Text>

                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      backgroundColor: '#FDFAE7',
                      borderColor: '#ddd',
                      borderWidth: 1,
                      borderRadius: 4,
                      marginRight: 5,
                      paddingHorizontal: 5,
                      // elevation: 1,
                    }}>
                    Attached Bathroom
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      backgroundColor: '#FDFAE7',
                      borderColor: '#ddd',
                      borderWidth: 1,
                      borderRadius: 4,
                      marginRight: 5,
                      paddingHorizontal: 5,
                    }}>
                    Max 2 Adults & 1 Child
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={require('../Assests/hi7.png')}
                      style={{width: 27, height: 27, marginRight: 7}}
                    />
                    <Image
                      source={require('../Assests/hi2.png')}
                      style={{width: 27, height: 27, marginRight: 7}}
                    />
                    <Image
                      source={require('../Assests/hi5.png')}
                      style={{width: 27, height: 27, marginRight: 7}}
                    />

                    <Text
                      style={{fontSize: 14, color: 'grey', fontWeight: '500'}}>
                      +3 more
                    </Text>
                  </View>

                  <Text
                    style={{fontSize: 14, color: 'grey', fontWeight: '500'}}>
                    11 Rooms Left
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: 'black',
                      }}>
                      {data.rooms[0].pricing}
                    </Text>
                    <Text style={{color: 'grey', marginTop: -5}}>
                      Per room for one night
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      borderWidth: 2.2,
                      borderColor: 'lightgrey',
                      borderRadius: 10,
                      width: 70,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500',
                        paddingHorizontal: 15,
                      }}>
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#ddd',
                width: winWidth - 20,
                height: 2,
                marginTop: 10,
              }}
            />

            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                color: 'black',
                marginTop: 10,
              }}>
              House Rules
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 2,
              }}>
              • Guest can check-in only with ID Proof.
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 2,
              }}>
              • Check-in: 12:00 PM - 11:00 PM
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 2,
              }}>
              • Check-out: 11:00 AM
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 2,
              }}>
              • Smoking within premises is not allowed.
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 2,
              }}>
              • Alcohol consumption is not allowed.
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: 'black',
                marginTop: 2,
              }}>
              • No loud music or noise allowed.
            </Text>

            <View
              style={{
                backgroundColor: '#ddd',
                width: winWidth - 20,
                height: 2,
                marginTop: 10,
              }}
            />

            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                color: 'black',
                marginTop: 10,
              }}>
              Contact Details
            </Text>

            <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
              <Image
                source={require('../Assests/hi11.png')}
                style={{width: 23, height: 23, marginTop: 5}}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  color: 'black',
                  marginTop: 5,
                  paddingLeft: 5,
                  marginRight: 15,
                }}>
                +91 1234567890
              </Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.showWithGravity(
              'This feature is under development and will be coming soon.',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
            );
          }}
          style={{
            backgroundColor: '#F0A936',
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            elevation: 1,
            marginBottom: 10,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '700',
              letterSpacing: 0.17,
              textAlign: 'center',
            }}>
            Book
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: '#feeed6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 35,
    height: 35,
    position: 'absolute',
    marginLeft: 10,
    marginTop: 10,
    zIndex: 1,
  },

  indicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
    alignSelf: 'center',
    marginTop: 10,
  },
  circles: {
    width: 8,
    height: 8,
    backgroundColor: 'orange',
    borderRadius: 100,
    elevation: 1,
  },
});
