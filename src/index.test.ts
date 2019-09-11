import DeviceDetector from '.'
import deviceMap from './deviceMap'

const makeGlobal = (appVersion, availWidth, touch) => {
  const global = {
    screen: { availWidth },
    navigator: { appVersion },
    document: { documentElement: {} }
  }
  if (touch) global.document.documentElement = { ontouchstart: true }
  return global
}

describe('Devices Detected', () => {
  deviceMap.forEach(device => {
    const global = makeGlobal(device.navigator, device.width, !!device.touch)
    const detector = new DeviceDetector(global)
    test(device.description, () => {
      expect(detector.isType('mobile')).toBe(device.expected['mobile'])
      expect(detector.isType('tablet')).toBe(device.expected['tablet'])
      expect(detector.isType('desktop')).toBe(device.expected['desktop'])
    })
  })
})

describe('Device Detector functions', () => {
  test('isOneOf', () => {
    expect(
      new DeviceDetector(
        makeGlobal(deviceMap[0].navigator, deviceMap[0].width, !!deviceMap[0].touch)
      ).isOneOf(['mobile', 'tablet'])
    ).toBe(true)
    expect(
      new DeviceDetector(
        makeGlobal(deviceMap[1].navigator, deviceMap[1].width, !!deviceMap[1].touch)
      ).isOneOf(['desktop', 'mobile', 'tablet'])
    ).toBe(true)
    expect(
      new DeviceDetector(
        makeGlobal(deviceMap[0].navigator, deviceMap[0].width, !!deviceMap[0].touch)
      ).isOneOf(['mobile'])
    ).toBe(true)
    expect(
      new DeviceDetector(
        makeGlobal(deviceMap[2].navigator, deviceMap[2].width, !!deviceMap[2].touch)
      ).isOneOf(['tablet'])
    ).toBe(true)
    expect(
      () => new DeviceDetector(
        makeGlobal(deviceMap[2].navigator, deviceMap[2].width, !!deviceMap[2].touch)
      ).isOneOf(['notexistent'])
    ).toThrow()
  })
})
