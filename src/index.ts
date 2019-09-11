/**
 * DEVICE DETECTOR
 * ~ Some device types might overlap in edge cases
 */
export default class {
  private navigator
  private global
  private deviceMap = {
    mobile: [
      [/Android/i, /Mobile/i],
      /iPhone;/i,
      /iPod/i,
      /BlackBerry/i,
      /webOS/i,
      /Windows Phone/i,
      /Windows Mobile/i,
      /Symbian/i,
      /MeeGo/i
    ],
    tablet: [
      /iPad/i,
      /KFAPWI/i,
      /Surface/i
    ],
    desktop: [
      /Macintosh/i,
      /Windows NT/i
    ]
  }

  constructor (global?) {
    this.global = global || window
    this.navigator = this.global.navigator
  }

  private navigatorMatchesMap (deviceType) {
    const map = this.deviceMap[deviceType]
    const navigator = this.navigator.appVersion
    for (let i = 0; i < map.length; i++) {
      if (map[i] instanceof Array) {
        if (map[i][0].test(navigator) && map[i][1].test(navigator)) {
          return true
        }
      } else if (map[i].test(navigator)) {
        return true
      }
    }
    return false
  }

  private get getBrowserWidth () {
    return this.global.innerWidth
      || this.global.document.documentElement.clientWidth
      || this.global.document.getElementsByTagName('body')[0].clientWidth
  }

  private get getScreenWidth () {
    return this.global.screen && this.global.screen.availWidth
      ? this.global.screen.availWidth
      : this.getBrowserWidth
  }

  private isAndroid () {
    return /Android/i.test(this.navigator.appVersion)
  }

  private isTouch () {
    return 'ontouchstart' in this.global.document.documentElement
  }

  public isMobile () {
    // KEEP IN MIND: Not necessarily touch
    // Think old phones
    return (
      this.navigatorMatchesMap('mobile') || this.getScreenWidth < 768
    )
  }

  public isTablet () {
    return (
      !this.navigatorMatchesMap('mobile')
      && (
        this.navigatorMatchesMap('tablet')
        || (
          !this.navigatorMatchesMap('desktop')
          && this.getScreenWidth >= 768
        )
      )
      && this.isTouch()
    )
  }

  public isDesktop () {
    return (
      !this.navigatorMatchesMap('tablet')
      && !this.navigatorMatchesMap('mobile')
      && !this.isAndroid()
      && (
        this.navigatorMatchesMap('desktop')
        || this.getScreenWidth >= 1024
      )
    )
  }

  public isOneOf (arrayOfTypes: string[]) {
    const booleanArray = arrayOfTypes.map(type => this.isType(type))
    return booleanArray.indexOf(true) > -1
  }

  public isType (type: string) {
    switch (type) {
      case 'mobile':
        return this.isMobile()
      case 'tablet':
        return this.isTablet()
      case 'desktop':
        return this.isDesktop()
      default:
        throw new Error('Unknown device type')
    }
  }

  public getType () {
    if (this.isMobile()) return 'mobile'
    if (this.isTablet()) return 'tablet'
    if (this.isDesktop()) return 'desktop'
    return 'unknown'
  }
}
