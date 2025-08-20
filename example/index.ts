const product :  FundraiserItem ={
  id: '100b5fd8-ab8f-4105-ab8b-1a95ff356852',
  name: 'Генератор электрический',
  description: 'Переносной бензогенератор 3 кВт',
  cost: 55000,
  collected: 12500,
  category: 'снаряжение',
  aidType: 'финансовая',
  createdAt: '2025-06-15',
  urgency: 'Срочно',
  image: [
    { id: '7f617a3a-bc44-4c9f-a6c1-c9585124bf88', photo: 'https://se-cdn.djiits.com/tpc/uploads/spu/cover/4c8f85d27ccbff1ef1419b8c901d8269@ultra.png' },
    { id: 'bec0065f-747d-4df4-ad68-9d4264efd7fb', photo: 'https://pehota.by/images/500/lopata-sapernaya-sssr_1.jpg' },
    { id: 'cb851741-59b5-4127-ac7b-8fb3dce2cb5b', photo: 'https://meditekm.ru/image/catalog/photo/OD6A6679-1.jpg' },
    { id: 'bed736a0-6033-4ffd-b8bf-c6a06de43792', photo: 'https://sturmuniform.ru/images/product_images/popup_images/23806_0.jpg' },
    { id: '4059c0a6-b509-4db9-aa2d-9700bdf05b6d', photo: 'https://basket-12.wbbasket.ru/vol1821/part182115/182115034/images/big/2.webp' }
  ],

  // 🔑 Ключи для сортировки и фильтров
  filters: {
    categoryKey: 'equipment',   // соответствует "Снаряжение"
    aidTypeKey: 'financial',    // "Финансовая помощь"
    urgencyKey: 'urgent',       // "Срочно"
    statusKey: 'active'         // "Активные заявки"
  }
}


export interface FundraiserItem {
  id: string,
  name: string,
  description: string,
  cost: number,
  collected: number,
  category: string,
  aidType: string,
  createdAt: string, // ISO date (YYYY-MM-DD)
  urgency: string,
  image: {
    id: string,
    photo: string
  }[]
  filters: {
    categoryKey: string,
    aidTypeKey: string,
    urgencyKey: string,
    statusKey:  string,
  }
}
