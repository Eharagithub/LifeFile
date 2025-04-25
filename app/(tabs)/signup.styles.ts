import { StyleSheet } from 'react-native';
const PRIMARY_COLOR = '#8d3dad';
const PRIMARY_LIGHT = '#d1b3e0';
const PRIMARY_DARK = '#6b2264';
const ACCENT_COLOR = '#4A9F8F';
//#8E2E84

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flexGrow: 1,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 28,
    alignSelf: 'center',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    borderColor: '#d8c8e0',
    //borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 52,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    height: 48,
    paddingVertical: 0,
    backgroundColor: 'transparent',
  },
  eyeIcon: {
    padding: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 28,
    marginTop: 2,
  },
  checkbox: {
    marginRight: 8,
    marginTop: 2,
  },
  checkboxBox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkboxBoxChecked: {
    borderColor: PRIMARY_COLOR,
    backgroundColor: '#f0e5f0',
  },
  checkboxText: {
    flex: 1,
    fontSize: 13,
    color: '#222',
    lineHeight: 18,
    flexWrap: 'wrap',
    marginTop: 1,
  },
  link: {
    color: '#7d4c9e',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  signUpButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,  
  },
  signUpButtonDisabled: {
    backgroundColor: PRIMARY_LIGHT,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
  },
  footerText: {
    color: '#222',
    fontSize: 14,
    fontWeight: '400',
  },
  
  footerLink: {
    color: '#7d4c9e',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 2,
  },
});
