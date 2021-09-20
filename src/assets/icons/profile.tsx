import React from 'react';
import {Path, Svg} from 'react-native-svg';

function ProfileIcon(props: React.SVGProps<Svg>) {
  const {fill = 'none', width = 21, height = 21} = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill={fill}>
      <Path d="M12,9H8H4c-2.209,0-4,1.791-4,4v3h16v-3C16,10.791,14.209,9,12,9z" />
      <Path d="M12,5V4c0-2.209-1.791-4-4-4S4,1.791,4,4v1c0,2.209,1.791,4,4,4S12,7.209,12,5z" />
    </Svg>
  );
}

export default ProfileIcon;
