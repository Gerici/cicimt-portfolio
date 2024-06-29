import React, { useState } from 'react';

const ImageWithPlaceholder = ({ src, alt, width, height, placeholderIcon }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
    };

    return (
        <div className="relative w-12 h-12">
            {!hasError && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={handleLoad}
                    onError={handleError}
                    width={width}
                    height={height}
                    className={`object-cover ${isLoaded ? '' : 'hidden'}`}
                />
            )}
            {(hasError || !isLoaded) && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <i className={`fas ${placeholderIcon} text-3xl`}></i>
                </div>
            )}
        </div>
    );
};

export default ImageWithPlaceholder;
