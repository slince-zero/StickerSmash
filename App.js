import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ImageViewer from './components/ImageViewer'
import Button from './components/Button'

const placeholderImageSource = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageViewer placeholderImageSource={placeholderImageSource} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label='选择一张图片' />
        <Button label='使用这张图片' />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
