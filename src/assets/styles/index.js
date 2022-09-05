import { Dimensions, StyleSheet } from 'react-native'

export const THIRD_COLOR = '#7444C0'
const SECONDARY_COLOR = '#CABBE9'
export const WHITE = '#FFFFFF' //'#517fa4'
export const PRIMARY_COLOR = '#D2B1FB'
export const GRAY = '#757E90'
const DARK_GRAY = '#363636'
const BLACK = '#000000'
export const TRANSPARENT1 = 'rgba(0,0,0,0.5)'
export const TRANSPARENT2 = 'rgba(210, 177, 251, 0.56)'
export const TRANSPARENT3 = 'rgba(0.5, 0.25, 0, 0.2)'
export const placeholderColor = '#9EA0A4'
export const DOT_SIZE = 40
export const chestColors = ['#D2FCCC', '#CBDFF7', '#EBD5FB', '#FEE4CB']

const ONLINE_STATUS = '#46A575'
const OFFLINE_STATUS = '#D04949'

const STAR_ACTIONS = '#FFA200'
const LIKE_ACTIONS = '#B644B2'
const DISLIKE_ACTIONS = '#363636'
const FLASH_ACTIONS = '#5028D7'
export const SKYBLUE = '#A1EAFB'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: width * 0.8,
    minHeight: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  textTypeOne: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: PRIMARY_COLOR,
  },
  textTypeTwo: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#D2B1FB',
  },
  textTypeThree: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: PRIMARY_COLOR,
  },
  textTypeFour: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: PRIMARY_COLOR,
  },
  textHeaderOne: {
    fontSize: 26,
    marginTop: 30,
    marginBottom: 15,
    color: PRIMARY_COLOR,
    textAlign: 'center',
  },
  textHeaderTwo: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 15,
    color: PRIMARY_COLOR,
    textAlign: 'center',
  },
  textHeaderThree: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 15,
    color: PRIMARY_COLOR,
    textAlign: 'center',
  },
  textHeaderFour: {
    fontSize: 24,
    marginTop: 30,
    marginBottom: 15,
    color: PRIMARY_COLOR,
    textAlign: 'center',
  },
  headerStyle: {
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    elevation: 0,
  },

  // COMPONENT - CARD ITEM
  containerCardItem: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  matchesCardItem: {
    marginTop: -35,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  matchesTextCardItem: {
    color: WHITE,
    fontSize: 19,
  },
  descriptionCardItem: {
    color: GRAY,
    textAlign: 'center',
  },
  distanceCardItem: {
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 17,
  },
  status: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: GRAY,
    fontSize: 12,
  },
  online: {
    width: 6,
    height: 6,
    backgroundColor: ONLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
  offline: {
    width: 6,
    height: 6,
    backgroundColor: OFFLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
  actionsCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  miniButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  star: {
    color: STAR_ACTIONS,
  },
  like: {
    fontSize: 25,
    color: LIKE_ACTIONS,
  },
  dislike: {
    fontSize: 25,
    color: DISLIKE_ACTIONS,
  },
  flash: {
    color: FLASH_ACTIONS,
  },

  // COMPONENT - CITY
  city: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 90,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  cityText: {
    color: DARK_GRAY,
    fontSize: 13,
  },

  // COMPONENT - FILTERS
  filters: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 70,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  filtersText: {
    color: DARK_GRAY,
    fontSize: 13,
  },

  // COMPONENT - PROFILE ITEM
  containerProfileItem: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    paddingBottom: 25,
    margin: 20,
    borderRadius: 8,
    marginTop: -65,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  matchesProfileItem: {
    width: 131,
    marginTop: -15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  matchesTextProfileItem: {
    color: WHITE,
  },
  name: {
    paddingTop: 25,
    paddingBottom: 5,
    color: DARK_GRAY,
    fontSize: 15,
    textAlign: 'center',
  },
  descriptionProfileItem: {
    color: GRAY,
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 13,
  },
  info: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconProfile: {
    fontSize: 12,
    color: DARK_GRAY,
    paddingHorizontal: 10,
  },
  infoContent: {
    color: GRAY,
    fontSize: 13,
  },

  // CONTAINER - GENERAL
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
  top: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },
  icon: {
    fontSize: 20,
    color: DARK_GRAY,
    paddingRight: 10,
  },

  // CONTAINER - HOME
  containerHome: { marginHorizontal: 10 },

  // CONTAINER - MATCHES
  containerMatches: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },

  photo: {
    width,
    height: 450,
  },
  topIconLeft: {
    fontSize: 20,
    color: WHITE,
    paddingLeft: 20,
    marginTop: -20,
    transform: [{ rotate: '90deg' }],
  },
  topIconRight: {
    fontSize: 20,
    color: WHITE,
    paddingRight: 20,
  },
  actionsProfile: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: { fontSize: 20, color: WHITE },
  textButton: {
    fontSize: 15,
    color: WHITE,
    paddingLeft: 5,
  },
  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  roundedButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 20,
  },

  // MENU
  tabButton: {
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabButtonText: {
    textTransform: 'uppercase',
  },
  iconMenu: {
    height: 60,
    paddingTop: 30,
  },
  logoLoader: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 20,
  },
})
