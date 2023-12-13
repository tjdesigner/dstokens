'use strict';

const colors = {
    // Tokens Principal
    primaryVeryDark: "#034D2E", // $color-primary-verydark
    primaryDark: "#00B11D", // $color-primary-dark
    primaryDefault: "#02D72F", // $color-primary-default
    primaryMedium: "#A6F89D", // $color-primary-medium
    primaryLight: "#CAF5C6", // $color-primary-light
    secondaryVeryDark: "#FF7D00", // $color-secondary-verydark
    secondaryDark: "#FFC200", // $color-secondary-dark
    secondaryDefault: "#FFF110", // $color-secondary-default
    secondaryMedium: "#FEF695", // $color-secondary-medium
    secondaryLight: "#FFFEE5", // $color-secondary-light
    // Tokens Neutral
    neutralVeryDark: "#1B2126", // $color-neutral-verydark
    neutralDark: "#A0AAB4", // $color-neutral-dark
    neutralMedium: "#E1EBF5", // $color-neutral-medium
    neutralLight: "#F5F5F5", // $color-neutral-light
    neutralVeryLight: "#FFFFFF", // $color-neutral-very-light
    // Tokens Feedback
    successVeryDark: "#008E00", // $color-success-verydark
    successDark: "#00C600", // $color-success-dark
    successDefault: "#1AEE02", // $color-success-default
    successMedium: "#86F671", // $color-success-medium
    successLight: "#D0F6C5", // $color-success-light
    warningVeryDark: "#D95100", // $color-warning-verydark
    warningDark: "#E97901", // $color-warning-dark
    warningDefault: "#F39404", // $color-warning-default
    warningMedium: "#F6B44D", // $color-warning-medium
    warningLight: "#FBDEB2", // $color-warning-light
    errorVeryDark: "#BF0000", // $color-error-verydark
    errorDark: "#DA2217", // $color-error-dark
    errorDefault: "#F93A1A", // $color-error-default
    errorMedium: "#ED6E66", // $color-error-medium
    errorLight: "#FFCBCD", // $color-error-light
    // Tokens Background
    bgDark: "#02D72F", // $color-bg-dark
    bgDefault: "#F5F5F5", // $color-bg-default
    bgLight: "#FFFFFF", // $color-bg-light
    // Tokens Auxiliar
    auxiliar1Dark: "#5C004F", // $color-auxiliar-1-dark
    auxiliar1Default: "#E20093", // $color-auxiliar-1-default
    auxiliar1Light: "#FFC6FF", // $color-auxiliar-1-light
    auxiliar2Dark: "#790006", // $color-auxiliar-2-dark
    auxiliar2Default: "#FF7900", // $color-auxiliar-2-default
    auxiliar2Light: "#FFF2B0", // $color-auxiliar-2-light
    auxiliar3Dark: "#004059", // $color-auxiliar-3-dark
    auxiliar3Default: "#00BEC8", // $color-auxiliar-3-default
    auxiliar3Light: "#B4FFF0", // $color-auxiliar-3-light
    auxiliar4Dark: "#5A0A28", // $color-auxiliar-4-dark
    auxiliar4Default: "#FF3654", // $color-auxiliar-4-default
    auxiliar4Light: "#FFBFC8", // $color-auxiliar-4-light
    auxiliar5Dark: "#0005B1", // $color-auxiliar-5-dark
    auxiliar5Default: "#2E70E5", // $color-auxiliar-5-default
    auxiliar5Light: "#99F2FF", // $color-auxiliar-5-light
    auxiliar6Dark: "#420080", // $color-auxiliar-6-dark
    auxiliar6Default: "#AA15D4", // $color-auxiliar-6-default
    auxiliar6Light: "#D7B0FF", // $color-auxiliar-6-light
    auxiliar7Dark: "#244C11", // $color-auxiliar-7-dark
    auxiliar7Default: "#00ff00", // $color-auxiliar-7-default
    auxiliar7Light: "#E6FF3C", // $color-auxiliar-7-light
    auxiliar8Dark: "#473816", // $color-auxiliar-8-dark
    auxiliar8Default: "#FFC600", // $color-auxiliar-8-default
    auxiliar8Light: "#FFF2DC", // $color-auxiliar-8-light
    auxiliar9Dark: "#1B2126", // $color-auxiliar-9-dark
    auxiliar9Default: "#A0AAB4", // $color-auxiliar-9-default
    auxiliar9Light: "#DCE6F0", // $color-auxiliar-9-light
    auxiliar10Dark: "#563700", // $color-auxiliar-10-dark
    auxiliar10Default: "#CBA851", // $color-auxiliar-10-default
    auxiliar10Light: "#FFF4DC", // $color-auxiliar-10-light
    auxiliar11Dark: "#96005A", // $color-auxiliar-11-dark
    auxiliar11Default: "#FF6EAA", // $color-auxiliar-11-default
    auxiliar11Light: "#FFE1CA", // $color-auxiliar-11-light
    auxiliar12Dark: "#227F89", // $color-auxiliar-12-dark
    auxiliar12Default: "#03A487", // $color-auxiliar-12-default
    auxiliar12Light: "#4AC69C", // $color-auxiliar-12-light
    auxiliar13Dark: "#2C455F", // $color-auxiliar-13-dark
    auxiliar13Default: "#5984B2", // $color-auxiliar-13-default
    auxiliar13Light: "#0EB3DA", // $color-auxiliar-13-light
};

const letterSpacings = {
    small: "0px",
    medium: "0.15px",
    large: "0.25px",
    regular: "0.5px",
};
const fonts = {
    family01: "'Montserrat'",
};
const fontSizes = {
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
    22: "22px",
    24: "24px",
};
const fontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
};
const lineHeights = {
    small: "120%",
    regular: "130%",
    medium: "140%",
    large: "150%",
    extraLarge: "160%",
};

const space = {
    // Tokens Mobile
    "sm-4": "4px", // $space-sm-4
    "sm-8": "8px", // $space-sm-8
    "sm-12": "12px", // $space-sm-12
    "sm-16": "16px", // $space-sm-16
    "sm-20": "20px", // $space-sm-20
    "sm-24": "24px", // $space-sm-24
    "sm-32": "32px", // $space-sm-32
    "sm-40": "40px", // $space-sm-40
    "sm-48": "48px", // $space-sm-48
    // Tokens Desktop
    "md-8": "8px", // $space-md-8
    "md-16": "16px", // $space-md-16
    "md-24": "24px", // $space-md-24
    "md-32": "32px", // $space-md-32
    "md-40": "40px", // $space-md-40
    "md-48": "48px", // $space-md-48
    "md-56": "56px", // $space-md-56
    "md-64": "64px", // $space-md-64
    "md-72": "72px", // $space-md-72
    "md-80": "80px", // $space-md-80
    "md-88": "88px", // $space-md-88
    "md-96": "96px", // $space-md-96
};
const breakpoints = {
    // Tokens Devices
    deviceSmall: "screen and (max-width: 480px)", // $device-sm
    deviceMedium: "screen and (min-width: 481px)", // $device-md
    deviceLarge: "screen and (min-width: 1024px)", // $device-lg
    deviceXLarge: "screen and (min-width: 1360px)", // $device-x-lg
};
const resolution = {
    // Tokens Resolution
    // Desktop
    deviceDesktopDefaultWidth: "1360px", // $device-desktop-default-width
    deviceDesktopLargetWidth: "1980px", // $device-desktop-large-width
    // Mobile
    deviceMobileDefaultWidth: "360px", // $device-mobile-default-width
};

const effects = {
    // Tokens Shadow
    shadowDefault: "0 1px 6px rgba(27, 33, 38, 0.15)", // $effects- shadow-1
    shadowIntense: "0 4px 8px rgba(27, 33, 38, 0.15)", // $effects- shadow-2
    // Tokens Opacity
    opacityDefault: "0.7", // $effects-opacity-1
    opacityIntense: "0.8", // $effects-opacity-2
    // Tokens Border
    borderWidth0: "0px", // $border-width-0
    borderWidth1: "1px", // $border-width-1
    borderWidth2: "2px", // $border-width-2
    borderWidth4: "4px", // $border-width-4
    borderWidth8: "8px", // $border-width-8
    borderRadius0: "0px", // $border-radius-0
    borderRadius4: "4px", // $border-radius-4
    borderRadius8: "8px", // $border-radius-8
    borderRadius16: "16px", // $border-radius-16
    borderRadius24: "24px", // $border-radius-24
    borderRadius100: "100px", // $border-radius-100
};

const layers = {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
};

exports.breakpoints = breakpoints;
exports.colors = colors;
exports.effects = effects;
exports.fontSizes = fontSizes;
exports.fontWeights = fontWeights;
exports.fonts = fonts;
exports.layers = layers;
exports.letterSpacings = letterSpacings;
exports.lineHeights = lineHeights;
exports.resolution = resolution;
exports.space = space;
//# sourceMappingURL=index.js.map
