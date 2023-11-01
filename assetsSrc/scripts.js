import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

Alpine.plugin(intersect);

window.Alpine = Alpine;

window.generateImgSrcSet = function (src, sizes) {
  const srcSet = [];
  sizes.forEach((size) => {
    srcSet.push(`${src}&width=${size} ${size}w`);
  });
  return srcSet.join(', ');
};

Alpine.start();
