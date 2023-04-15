import { Dimensions, Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const { width, height } = Dimensions.get( 'window' );

/* *************** Colors ********** */

export const COLORS = {
  primary: '#D9A738',
  orange: '#F89A2B',
};

const appTheme = { COLORS };

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Bold: 'Montserrat-Bold',
  Light: 'Montserrat-Light',
  Medium: 'Montserrat-Medium',
  Regular: 'Montserrat-Regular',
  Ionicons: 'Ionicons',
  AntDesign: 'AntDesign',
  EvilIcons: 'EvilIcons',
  Entypo: 'Entypo',
  FontAwesome: 'FontAwesome',
  Feather: 'Feather',
  MaterialIcons: 'MaterialIcons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Octicons: 'Octicons',
  SimpleLineIcons: 'SimpleLineIcons',
  Fontisto: 'Fontisto',
};

/* * Images * */
export const IMAGES = {
  noWifi: require( '../assets/images/no-signal.png' ),
};

/* * Screens * */
export const SCREENS = {
  Splash: 'Splash',
  DrawerNavigator: "DrawerNavigator",
  UserMainLayout: 'UserMainLayout',

};

export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyWidth: width * 0.05,
  twentyFive: height * 0.03,
  twentyFiveWidth: width * 0.08,
  fifty: height * 0.075,
  fiftyWidth: width * 0.13,

  // font sizes
  h16: width * 0.034,
  h18: width * 0.038,
  h20: width * 0.042,
  h22: width * 0.048,
  h24: width * 0.055,
  body08: width * 0.024,
  body10: width * 0.028,
  body12: width * 0.032,
  body14: width * 0.036,
  body16: width * 0.04,
  body18: width * 0.045,
};

export const FONTS = {
  boldFont16: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h16,
    color: COLORS.black,
    fontWeight: '700',
  },
  boldFont18: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  boldFont20: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  boldFont22: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  boldFont24: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  semiBoldFont16: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h16,
    color: COLORS.black,
  },
  semiBoldFont18: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  semiBoldFont20: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  semiBoldFont22: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  semiBoldFont24: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  mediumFont10: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body10 },
  mediumFont12: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body12 },
  mediumFont14: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body14 },
  mediumFont16: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body16 },
  mediumFont18: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body18 },
  regularFont10: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body10 },
  regularFont12: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body12 },
  regularFont14: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body14 },
  regularFont16: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body16 },
  regularFont18: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body18 },
  lightFont08: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body08 },
  lightFont10: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body10 },
  lightFont12: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body12 },
  lightFont14: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body14 },
  lightFont16: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body16 },
  lightFont18: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body18 },
};

export const STYLES = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop:
      Platform.OS === 'android'
        ? SIZES.fifteen * 1.2
        : getStatusBarHeight( true ),
    backgroundColor: COLORS.white,
  },
  splashLogo: {
    width: SIZES.fifteen * 13,
    height: SIZES.fifteen * 13,
    alignSelf: 'center',
  },
  loginView: {
    flex: 1,
    width: '100%',
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
  },
  lightText: {
    fontFamily: FONTFAMILY.Light,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
  headingText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twenty + 5,
    color: COLORS.black,
  },
  paragraphText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.fifteen - 1,
    color: COLORS.black,
  },
  drawerItem: {
    alignItems: 'center',
    borderRadius: SIZES.fifteen,
    paddingVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.fifteen,
  },
  drawerIcon: {
    fontSize: SIZES.fifteen + 10,
  },
  drawerText: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    marginHorizontal: SIZES.fifteen - 5,
  },
  horLine: {
    height: 0.3,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.brownGrey,
  },
  shadow: {
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    shadowColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
} );

export const CONSTANTS = {

  API_URLS: {
    BASE: 'http://porter.reignsol.net/api/v1/',
    BASE_VENDOR: 'http://porter.reignsol.net/api/v1/vendor/',
    IMAGE: 'http://porter.reignsol.net/',


  },

  /* * FirebaseConstants * */
  FIREBASE: {
    CHAT: 'Chat',
    MESSAGES: 'messages',
    USERS: 'Users',
    CHATHEADS: 'ChatHeads',
    READ: 'read',
    TOKEN: 'Tokens',
    FCM: 'https://fcm.googleapis.com/fcm/send',
  },

};
