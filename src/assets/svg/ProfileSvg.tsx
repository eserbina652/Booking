import React from 'react';
import {HoveredSvgProps} from './interfaces';
import Svg, {Path} from 'react-native-svg';
const ProfileSvg = ({focused}: HoveredSvgProps) => {
  return (
    <>
      {focused ? (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="#003580">
          <Path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
        </Svg>
      ) : (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 1)">
          <Path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
        </Svg>
      )}
    </>
  );
};

export default ProfileSvg;
