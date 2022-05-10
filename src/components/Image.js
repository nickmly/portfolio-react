import React from 'react';

const Image = ({ className, src, fallback, alt, fluid, rounded, roundedCircle }) => {
	return (
		<picture>
			<source srcSet={src} type="image/webp" />
			<source srcSet={fallback} type="image/jpeg" />
			<img className={className} alt={alt} style={{
				width: fluid ? '100%' : null,
				borderRadius: roundedCircle ? '50%' : rounded ? '0.25em' : 'unset'
			}} />
		</picture>
	);
};

export default Image;