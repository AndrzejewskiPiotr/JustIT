import React, { FunctionComponent } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

interface IProps {
  onChange: any;
  dotStyle?: any;
  railStyle?: any;
  handleStyle?: any;
  trackStyle?: any;
  value: any;
  min: number;
  max: number;
}
const CommonRangeInput: FunctionComponent<IProps> = ({
  onChange,
  dotStyle,
  max,
  min,
  railStyle,
  handleStyle,
  trackStyle,
  value,
}): JSX.Element => (
  <Range
    pushable
    onChange={e => onChange(e)}
    min={0}
    max={33}
    value={[0, 33]}
    dotStyle={{ width: '20px', height: '20px' }}
    railStyle={{ top: '10px' }}
    handleStyle={[
      {
        backgroundColor: '#764abc',
        borderColor: '#764abc',
        width: '26px',
        height: '26px',
        marginLeft: '-14px',
      },
      {
        backgroundColor: '#764abc',
        borderColor: '#764abc',
        width: '26px',
        height: '26px',
        marginLeft: '-14px',
      },
    ]}
    trackStyle={[{ backgroundColor: '#764abc', top: '10px' }]}
  />
);

export default CommonRangeInput;
