import React from 'react';

export const ScrollableImages = () => {
    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Buenos_Aires_-_Colectivo_L%C3%ADnea_152_-_20130314_105700.jpg",
        "https://pbs.twimg.com/profile_images/1471175782768599045/UxtdiqF7_400x400.jpg",
        "https://www.saavedraonline.com.ar/wp-content/uploads/2023/01/Fn1DHeJWIAU20ky.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Buenos_Aires_-_Colectivo_L%C3%ADnea_152_-_20130314_105700.jpg",
        "https://pbs.twimg.com/profile_images/1471175782768599045/UxtdiqF7_400x400.jpg",
        "https://www.saavedraonline.com.ar/wp-content/uploads/2023/01/Fn1DHeJWIAU20ky.jpg",
      ];
    
      return (
        <div className="flex overflow-x-auto h-48 gap-2 ">
          {images.map((image, index) => (
            <img key={index} className="rounded-xl w-auto h-full" src={image} alt="Scrollable content" />
          ))}
        </div>
      );
    };
