;(function () {



  var DIRECT_NUMS = {
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'ninteen': 19,
    'zero': 0,
    'ten': 10,
    'one': 1,
    'two': 2,
    'three': 3,
    'four(\\W|$)': 4,
    'five': 5,
    'six(\\W|$)': 6,
    'seven(\\W|$)': 7,
    'eight(\\W|$)': 8,
    'nine(\\W|$)': 9,
    '\\sa[\\s^$]': 1
  };

  var TEN_PREFIXES = {
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fourty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
  };

  var BIG_PREFIXES = {
   'hundred': 100,
   'thousand': 1000,
   'million': 1000000,
   'billion': 1000000000,
   'trillion': 1000000000000,
 };


 var FRACTIONS =  {
  'half': 2,
  'third(s)?': 3,
  'fourth(s)?': 4,
  'quarter(s)?': 4,
  'fifth(s)?': 5,
  'sixth(s)?': 6,
  'seventh(s)?': 7,
  'eighth(s)?': 8,
  'nineth(s)?': 9
};


var ORDINALS = {
  'first': 1,
  'third': 3,
  'fourth': 4,
  'fifth': 5,
  'sixth': 6,
  'seventh': 7,
  'eighth': 8,
  'ninth': 9,
  'tenth': 10
};

function preprocess(text) {
  return text.replace(/ +|([^\\d])-([^\\d])/, '$1 $2');
}

function andition (text) {
  var andreg = new RegExp('<num>(\\d+)( | and\\s*)<num>([0-9]*\.?[0-9])(?=[^\\w]|$)', 'i');
  if (andreg.test(text)) {
    return andition(text.replace(andreg, function (match, numone, space, numtwo) {
      return '<num>' + (parseFloat(numone) + parseFloat(numtwo));
    }));
  } 
  return text;
}

function fractition (text) {
  var fracreg = new RegExp('<num>(\\d+) *<frac>(\\d+(?=[^\\d+]|$))*', 'i');
  if (fracreg.test(text)) {
    return fractition(text.replace(fracreg, function (match, numone, numtwo) {
      if (parseFloat(numtwo) === 0) {
        return 'NaN';
      }
      return '<num>' + (parseFloat(numone) / parseFloat(numtwo));
    }));
  }
  return text;
}

function numerize(input) {
  var text = preprocess(input) || '';
  for (var dn in DIRECT_NUMS) {
    var dn_reg = new RegExp(dn, 'ig');
    text = text.replace(dn_reg, '<num>' + DIRECT_NUMS[dn]);
  }
  for (var f in FRACTIONS) {
    var f_reg = new RegExp(f, 'ig');
    text = text.replace(f_reg, '<frac>' + FRACTIONS[f]); 
  }
  text = fractition(text);
  for (var tp in TEN_PREFIXES) {
    var tp_reg = new RegExp('(?:'+tp+') *<num>(\\d(?=[^\\d]|$))*', 'ig'); 
    text = text.replace(tp_reg, function (match, num, contents, offset, s) {
      return '<num>' + (TEN_PREFIXES[tp] + parseFloat(num));
    });
  }

  for (var tps in TEN_PREFIXES) {
    var tps_reg = new RegExp(tps, 'ig');
    text = text.replace(tps_reg, '<num>' + TEN_PREFIXES[tps]); 
  }

  for (var bp in BIG_PREFIXES) {
    var bp_reg = new RegExp('(?:<num>)?(\\d*) *' + bp, 'ig')
    text = text.replace(bp_reg, function (match, num) {
      return '<num>' + (BIG_PREFIXES[bp] * parseFloat(num));
    });
    text = andition(text);
  }

  return text.replace(/<num>/ig, '');

}
  // AMD / RequireJS
if (typeof define !== 'undefined' && define.amd) {
  define([], function () {
    return numerize;
  });
}
// Node.js
else if (typeof module !== 'undefined' && module.exports) {
  module.exports = numerize;
}
// included directly via <script> tag
else {
  this.numerize = numerize;
}


})();
