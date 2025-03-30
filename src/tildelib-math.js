var tildelib = tildelib || {};
tildelib.math = tildelib.math || {};

(function() {
  var PI = 3.141592653589793;
  var E = 2.718281828459045;

  tildelib.math.abs = function(x) {
    return x < 0 ? -x : x;
  };

  tildelib.math.acos = function(x) {
    if (x > 1 || x < -1) return NaN;
    return Math.acos(x);
  };

  tildelib.math.asin = function(x) {
    if (x > 1 || x < -1) return NaN;
    return Math.asin(x);
  };

  tildelib.math.atan = function(x) {
    return Math.atan(x);
  };

  tildelib.math.atan2 = function(y, x) {
    return Math.atan2(y, x);
  };

  tildelib.math.ceil = function(x) {
    return Math.ceil(x);
  };

  tildelib.math.cos = function(x) {
    return Math.cos(x);
  };

  tildelib.math.exp = function(x) {
    return Math.exp(x);
  };

  tildelib.math.floor = function(x) {
    return Math.floor(x);
  };

  tildelib.math.log = function(x) {
    return Math.log(x);
  };

  tildelib.math.pow = function(base, exponent) {
    return Math.pow(base, exponent);
  };

  tildelib.math.sin = function(x) {
    return Math.sin(x);
  };

  tildelib.math.sqrt = function(x) {
    return Math.sqrt(x);
  };

  tildelib.math.tan = function(x) {
    return Math.tan(x);
  };

  tildelib.math.toRadians = function(degrees) {
    return degrees * (PI / 180);
  };

  tildelib.math.toDegrees = function(radians) {
    return radians * (180 / PI);
  };

  tildelib.math.PI = PI;
  tildelib.math.E = E;

  tildelib.math.min = function(a, b) {
    return a < b ? a : b;
  };

  tildelib.math.max = function(a, b) {
    return a > b ? a : b;
  };

  tildelib.math.round = function(x) {
    return Math.round(x);
  };

  tildelib.math.random = function() {
    tildelib.math._randomSeed = (tildelib.math._randomSeed * 1664525 + 1013904223) % 4294967296;
    return tildelib.math._randomSeed / 4294967296;
  };

  tildelib.math.randomRange = function(min, max) {
    return min + tildelib.math.random() * (max - min);
  };

  tildelib.math._randomSeed = Math.floor(Date.now());

  tildelib.math.log10 = function(x) {
    return Math.log(x) / Math.log(10);
  };

  tildelib.math.cbrt = function(x) {
    return x >= 0 ? Math.pow(x, 1 / 3) : -Math.pow(-x, 1 / 3);
  };

  tildelib.math.trunc = function(x) {
    return x >= 0 ? Math.floor(x) : Math.ceil(x);
  };

  tildelib.math.hypot = function(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  };

  tildelib.math.sign = function(x) {
    if (x > 0) return 1;
    if (x < 0) return -1;
    return 0;
  };
})();
