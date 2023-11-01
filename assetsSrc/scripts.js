import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

Alpine.plugin(intersect);

// taken from https://gist.github.com/james0r/e5a02db44beba8b5fc447e78615c1eb7
Alpine.magic('money', () => {
  return (cents, format) => {
    // if (format) {
    //   format = '${{' + format + '}}';
    // }

    if (cents === null || cents === undefined) {
      return '';
    }

    if (typeof cents == 'string') {
      cents = cents.replace('.', '');
    }
    let value = '';
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    const formatString = format || '${{amount}}';

    function defaultOption(opt, def) {
      return typeof opt == 'undefined' ? def : opt;
    }

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultOption(precision, 2);
      thousands = defaultOption(thousands, ',');
      decimal = defaultOption(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents = parts[1] ? decimal + parts[1] : '';

      return dollars + cents;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  };
});

Alpine.magic('genImgSrcSet', () => {
  return (src, sizes) => {
    const srcSet = [];
    sizes.forEach((size) => {
      srcSet.push(`${src}&width=${size} ${size}w`);
    });
    return srcSet.join(', ');
  };
});

window.Alpine = Alpine;

Alpine.start();
