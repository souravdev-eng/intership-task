import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  model: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: '60%',
    width: '90%',
    alignSelf: 'center',
    // marginTop: 50,
    elevation: 5,
    position: 'absolute',
    bottom: 80,
  },
  textInputContainer: {
    marginTop: 90,
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 0.5,
    width: '95%',
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderColor: '#ccc',
  },
  add: {
    backgroundColor: '#462eb8',
    width: 200,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 12,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default styles;
