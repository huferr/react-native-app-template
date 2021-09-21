import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const screenWidthPercentage = (percentage: string) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(percentage)) / 100,
  );
};

const screenHeightPercentage = (percentage: string) => {
  const screenheight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenheight * parseFloat(percentage)) / 100,
  );
};

export default {
  basePadding: 20,
  baseRadius: 15,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? width : height,
  screenWidthPercentage,
  screenHeightPercentage,
};
