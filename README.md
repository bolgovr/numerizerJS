numerizerJS
===========

[![Build Status](https://travis-ci.org/bolgovr/numerizerJS.png?branch=master)](https://travis-ci.org/bolgovr/numerizerJS)


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

#Licence(MIT)

Copyright (C) 2013 Bolgov Roman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
