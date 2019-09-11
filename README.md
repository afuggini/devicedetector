# @afuggini/devicedetector

## Install

```
$ npm i @afuggini/devicedetector
```

## Example Usage

```javascript
const DeviceDetector = require('@afuggini/devicedetector')

const deviceDetector = new DeviceDetector()

deviceDetector.getType() // 'desktop'
deviceDetector.isOneOf('mobile') // false
deviceDetector.isType('tablet') // false
deviceDetector.isMobile() // false
deviceDetector.isTablet() // false
deviceDetector.isDesktop() // true
```

## License

MIT
