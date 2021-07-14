import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as MelatiIcon } from './images/melati.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={MelatiIcon} viewBox="0 0 150 58" {...props} />;
}
