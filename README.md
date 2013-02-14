numerizerJS
===========

Numerizer is library for parsing numbers in natural language from strings.
Port of [Chronic's](https://github.com/mojombo/chronic) numerizer lib to JavaScript

#Installation
  `npm install numerizer`

#Usage

```javascript
 var numerizer = require('numerizer');
 numerizer('forty two'); //'42', library returns String, so do not forget to parseInt or parseFloat it
```
 
#Test
  `npm test`
