import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ImageViewer from './components/ImageViewer'
import Button from './components/Button'
import CircleButton from './components/CircleButton'
import IconButton from './components/IconButton'
import * as ImagePicker from 'expo-image-picker'

const placeholderImageSource = require('./assets/images/background-image.png')

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showAppOptions, setShowAppOptions] = useState(false)

  // 选择图片
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('没有选中任何图片')
    }
  }

  // 重置图片
  const onReset = () => {
    setShowAppOptions(false)
  }

  // 添加一个sticker
  const onAddSticker = () => {}

  // 保存图片
  const onSaveImageAsync = async () => {}

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageViewer
          placeholderImageSource={placeholderImageSource}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton
              icon={'refresh'}
              label='重置'
              onPress={onReset}
            />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon={'save-alt'}
              label='保存'
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme='primary'
            label='选择一张图片'
            onPress={pickImageAsync}
          />
          <Button
            label='使用这张图片'
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}

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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
