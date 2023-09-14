import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CalendarSvg = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 1)">
      <Path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" />
      <Path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z" />
    </Svg>
  );
};

export default CalendarSvg;
