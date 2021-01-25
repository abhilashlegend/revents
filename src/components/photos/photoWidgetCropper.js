import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default

const PhotoWidgetCropper = ({setImage, imagePreview}) => {

    const cropperRef = useRef(null);
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    if(typeof cropper.getCroppedCanvas() === 'undefined') {
        return;
    }

    cropper.getCroppedCanvas().toBlob(blob => {
        setImage(blob);
    }, 'image/jpeg')
  };

    return (
        <Cropper
            ref={cropperRef}
            src={imagePreview}
            style={{height: 400, width: '100%'}}
            // Cropper.js options
            initialAspectRatio={16 / 9}
            preview='.img-preview'
            guides={false}
            viewMode={1}
            dragMode='move'
            scalable={true}
            cropBoxMovable={true}
            cropBoxResizable={true}
            crop={onCrop}
        />
    )
}

export default PhotoWidgetCropper;
 