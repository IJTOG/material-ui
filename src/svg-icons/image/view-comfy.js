import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let ImageViewComfy = (props) => (
  <SvgIcon {...props}>
    <path d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM3 19h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h4v-4h-4v4zm0-14v4h4V5h-4z"/>
  </SvgIcon>
);
ImageViewComfy = pure(ImageViewComfy);
ImageViewComfy.displayName = 'ImageViewComfy';
ImageViewComfy.muiName = 'SvgIcon';

export default ImageViewComfy;