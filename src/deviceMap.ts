export default [
  {
    description: 'iPhone X Portrait',
    navigator: '5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    width: 375,
    expected: {
      mobile: true,
      tablet: false,
      desktop: false
    },
    touch: true
  },
  {
    description: 'iPhone X Landscape',
    navigator: '5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    width: 812,
    expected: {
      mobile: true,
      tablet: false,
      desktop: false
    },
    touch: true
  },
  {
    description: 'iPad Portrait',
    navigator: '5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    width: 768,
    expected: {
      mobile: false,
      tablet: true,
      desktop: false
    },
    touch: true
  },
  {
    description: 'iPad Landscape',
    navigator: '5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    width: 1024,
    expected: {
      mobile: false,
      tablet: true,
      desktop: false
    },
    touch: true
  },
  {
    description: 'iPad Pro Portrait',
    navigator: '5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    width: 1024,
    expected: {
      mobile: false,
      tablet: true,
      desktop: false
    },
    touch: true
  },
  {
    description: 'iPad Pro Landscape',
    navigator: '5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    width: 1366,
    expected: {
      mobile: false,
      tablet: true,
      desktop: false
    },
    touch: true
  },
  {
    description: 'Kindle Fire HDX',
    navigator: '5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true',
    width: 800,
    expected: {
      mobile: false,
      tablet: true,
      desktop: false
    },
    touch: true
  },
  {
    description: 'Kindle Fire HDX Landscape',
    navigator: '5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true',
    width: 1280,
    expected: {
      mobile: false,
      tablet: true,
      desktop: false
    },
    touch: true
  },
  {
    description: 'Galaxy S5',
    navigator: '5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Mobile Safari/537.36',
    width: 360,
    expected: {
      mobile: true,
      tablet: false,
      desktop: false
    },
    touch: true
  },
  {
    description: 'Samsung Galaxy Tab S2 9.7"',
    navigator: 'Mozilla/5.0 (Linux; Android 6.0.1; SAMSUNG SM-T815 Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/44.0.2403.133 Safari/537.36',
    width: 768,
    expected: {
      mobile: false,
      tablet: true,
      desktop: false
    },
    touch: true
  },
  {
    description: 'Microsoft Surface',
    navigator: 'Mozilla/5.0 (Microsoft Surface; Windows NT 6.3; ARM; Tablet; Trident/7.0; Touch; rv:11.0) like Gecko',
    width: 1920,
    expected: {
      mobile: false,
      tablet: true,
      desktop: false
    },
    touch: true
  },
  {
    description: 'Macbook Pro 15"',
    navigator: '5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
    width: 1920,
    expected: {
      mobile: false,
      tablet: false,
      desktop: true
    },
    touch: false
  },
  {
    description: 'Chrome 68 on Windows 10',
    navigator: 'Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US) AppleWebKit/604.1.38 (KHTML, like Gecko) Chrome/68.0.3325.162',
    width: 1280,
    expected: {
      mobile: false,
      tablet: false,
      desktop: true
    },
    touch: false
  },
  {
    description: 'Internet Explorer 8 on Windows XP',
    navigator: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)',
    width: 800,
    expected: {
      mobile: false,
      tablet: false,
      desktop: true
    },
    touch: false
  },
  {
    description: 'Chrome 68 on Windows 10',
    navigator: 'Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US) AppleWebKit/604.1.38 (KHTML, like Gecko) Chrome/68.0.3325.162',
    width: 1280,
    expected: {
      mobile: false,
      tablet: false,
      desktop: true
    },
    touch: false
  },
  {
    description: 'Chrome 68 on Windows 10 (Touch Computer)',
    navigator: 'Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US) AppleWebKit/604.1.38 (KHTML, like Gecko) Chrome/68.0.3325.162',
    width: 1280,
    expected: {
      mobile: false,
      tablet: false,
      desktop: true
    },
    touch: true
  },
  {
    description: 'Firefox 43 on Ubuntu Linux',
    navigator: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:43.0) Gecko/20100101 Firefox/43.0',
    width: 1280,
    expected: {
      mobile: false,
      tablet: false,
      desktop: true
    },
    touch: false
  },
  {
    description: 'Motorola V3',
    navigator: 'MOT-V3/0E.42.09R MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0',
    width: 176,
    expected: {
      mobile: true,
      tablet: false,
      desktop: false
    },
    touch: false
  },
  {
    description: 'iPhone 6 on Facebook App 191',
    navigator: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 [FBAN/FBIOS;FBAV/191.0.0.42.96;FBBV/125515388;FBDV/iPhone7,2;FBMD/iPhone;FBSN/iOS;FBSV/12.0;FBSS/2;FBCR/TIGO;FBID/phone;FBLC/es_LA;FBOP/5;FBRV/126532023]',
    width: 375,
    expected: {
      mobile: true,
      tablet: false,
      desktop: false
    },
    touch: true
  },
  {
    description: 'Samsung J2 on Facebook App 94 on Android (Marshmallow)',
    navigator: 'SupportsFresco=1 Dalvik/2.1.0 (Linux; U; Android 6.0.1; SM-J210F Build/MMB29Q) Source/1 [FBAN/EMA;UNITY_PACKAGE/342;FBBV/107586706;FBAV/94.0.0.8.182;FBDV/SM-J210F;FBLC/en_US;FBOP/20]',
    width: 360,
    expected: {
      mobile: true,
      tablet: false,
      desktop: false
    },
    touch: true
  },
  {
    description: 'iPad on Facebook App 100.1',
    navigator: 'Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 [FBAN/MessengerForiOS;FBAV/100.1.0.36.68;FBBV/46154306;FBRV/0;FBDV/iPad2,4;FBMD/iPad;FBSN/iPhone OS;FBSV/9.3.5;FBSS/1;FBCR/;FBID/tablet;FBLC/en_GB;FBOP/5]',
    width: 768,
    expected: {
      mobile: false,
      tablet: true,
      desktop: false
    },
    touch: true
  }
]
