import React, { useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import CircularImage from '../../components/CircularImage';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import Row from '../../components/Row';
import {
  COLORS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';
import { useDispatch, useSelector } from 'react-redux';

import Icon, { IconType } from '../../components/Icons';

export default function More( { navigation } ) {
  const dispatch = useDispatch();

  const [SELECTEDTAB, SetSELECTEDTAB] = useState();

  const navigateToNextScreen = screenName => {
    navigation.navigate( screenName );
  };
  const DrawerBtn = ( { name, IconName, type, Screen } ) => {
    return (
      <MyTouchableOpacity
        activeOpacity={1}
        style={[
          STYLES.drawerItem,
          {
            backgroundColor:
              SELECTEDTAB === name ? COLORS.primary : COLORS.white,
          },
        ]}
        // onPressIn={() => SetSELECTEDTAB(name)}
        onPressOut={() => SetSELECTEDTAB( ' ' )}
        onPress={() => {
          SetSELECTEDTAB( name );
          // navigateToNextScreen(Screen);
          // navigation.toggleDrawer();
        }}>
        <Row style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
          <Icon
            name={IconName}
            type={type}
            style={[
              STYLES.drawerIcon,
              { color: SELECTEDTAB === name ? COLORS.white : COLORS.black },
            ]}
          />
          <Text
            style={[
              STYLES.drawerText,
              {
                color: SELECTEDTAB === name ? COLORS.white : COLORS.black,
              },
            ]}>
            {name}
          </Text>
        </Row>
      </MyTouchableOpacity>
    );
  };

  const USERTYPE = useSelector( state => state.UserType.value );

  const [isLogoutModalVisible, setisLogoutModalVisible] = React.useState( false );

  const [logOutView, setLogOutView] = React.useState( {
    textColor: COLORS.black,
    bgColor: COLORS.white,
  } );

  const logout = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setisLogoutModalVisible( !isLogoutModalVisible );
  };

  const resetAction = CommonActions.reset( {
    index: 0,
    routes: [{ name: SCREENS.Splash }],
  } );

  return (
    <View
      style={[
        STYLES.container,
        {
          flex: 1,
          backgroundColor: COLORS.white,
          borderColor: COLORS.gray,
          borderWidth: 1,
          borderBottomRightRadius: SIZES.twenty,
          borderTopRightRadius: SIZES.twenty,
        },
      ]}>
      {/* Start of Top Container of User */}
      <MyTouchableOpacity
        activeOpacity={1}
        style={{
          paddingVertical: SIZES.fifteen * 2,
        }}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <View style={{ paddingHorizontal: SIZES.twenty }}>
          <CircularImage
            image={IMAGES.User1}
            style={{
              height: SIZES.fifty + 10,
              width: SIZES.fifty + 10,
              borderRadius: SIZES.fifty + 10,
            }}
            imageStyle={{
              height: SIZES.fifty + 10,
              width: SIZES.fifty + 10,
              borderRadius: SIZES.fifty + 10,
            }}
          />
          <View style={{ marginHorizontal: SIZES.ten }}>
            <Text style={[FONTS.mediumFont16, { color: COLORS.black }]}>
              {/* {Profile?.records?.name} */}
              Taimoor
            </Text>
            <Text
              numberOfLines={1}
              style={[FONTS.mediumFont12, { color: COLORS.brownGray }]}>
              18/8/1999
            </Text>
          </View>
        </View>
      </MyTouchableOpacity>
      {/* End of Top Container of User */}

      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.ten,
          paddingTop: SIZES.ten,
        }}>


        <DrawerBtn
          name={'Settings'}
          IconName="setting"
          type={IconType.AntDesign}
          Screen={SCREENS.Splash}
        />

      </View>

      {/* Start of Logout Container */}
      <MyTouchableOpacity
        activeOpacity={1}
        style={[
          STYLES.drawerItem,
          {
            // marginTop: SIZES.twentyFive * 11,
            marginBottom: SIZES.twenty,
            backgroundColor: logOutView.bgColor,
          },
        ]}
        onPress={() => {
          logout();
        }}
        onPressIn={() =>
          setLogOutView( { textColor: COLORS.white, bgColor: COLORS.primary } )
        }
        onPressOut={() =>
          setLogOutView( {
            textColor: COLORS.black,
            bgColor: COLORS.white,
          } )
        }>
        <Row style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
          <Icon
            name={'logout'}
            type={IconType.SimpleLineIcons}
            style={[STYLES.drawerIcon, { color: logOutView.textColor }]}
          />
          <Text style={[STYLES.drawerText, { color: logOutView.textColor }]}>
            Log Out
          </Text>
        </Row>
      </MyTouchableOpacity>
      {/* End of Logout Container */}

      {/* Start of Logout Modal */}
      <Modal
        isVisible={isLogoutModalVisible}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SIZES.ten * 2,
            borderRadius: SIZES.ten,
            borderWidth: 1.5,
            borderColor: COLORS.primary,
          }}>
          <Image
            source={IMAGES.Logo}
            resizeMode={'contain'}
            style={{
              alignSelf: 'center',
              width: SIZES.twentyFive * 6,
              height: SIZES.twentyFive * 3,
            }}
          />

          <Text
            style={[
              STYLES.mediumText,
              {
                marginVertical: SIZES.twenty,
                textAlign: 'center',
                color: COLORS.brownGray,
              },
            ]}>
            Are you sure you want to logout?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <MyTouchableOpacity
              onPress={() => {
                navigation.navigate( SCREENS.Splash );
              }}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: 'center',
                marginEnd: SIZES.five,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
              }}>
              <Text style={[STYLES.mediumText, { color: COLORS.white }]}>
                Yes
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              onPress={() => toggleModal()}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: 'center',
                marginStart: SIZES.five,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
              }}>
              <Text style={[STYLES.mediumText, { color: COLORS.white }]}>No</Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* End of Logout Modal */}
    </View>
  );
}

const styles = StyleSheet.create( {} );
