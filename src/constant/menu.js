export const menu = [
  {
    id: 'company',
    langKey: 'company', // 회사
    page: 'CompanyPage',
    childs: [
      { id: 'company_ceo', langKey: 'CEOGreetings', page: 'CEOPage' }, // 대표인사 인사말
      { id: 'company_introduction', langKey: 'introduction', page: 'IntroductionPage' }, // 소개
      { id: 'company_history', langKey: 'history', page: 'HistoryPage' }, // 연혁
    ]
  },
  {
    id: 'product',
    langKey: 'product', // 제품
    page: 'ProductPage',
    childs: [
      { id: 'product_carrier', langKey: 'carrierAndDeveloper', page: 'CarrierPage' }, //  carrier&developer
      { id: 'product_cartridge', langKey: 'cartridge', page: 'CartridgePage' }, // cartridge
    ],
  },
  {
    id: 'contact',
    langKey: 'contact', // 문의
    page: 'ContactPage',
  },
];
