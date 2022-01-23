export const Month = {
  1: 'ЯНВАРЬ',
  2: 'ФЕВРАЛЬ',
  3: 'МАРТ',
  4: 'АПРЕЛЬ',
  5: 'МАЙ',
  6: 'ИЮНЬ',
  7: 'ИЮЛЬ',
  8: 'АВГУСТ',
  9: 'СЕНТЯБРЬ',
  10: 'ОКТЯБРЬ',
  11: 'НОЯБРЬ',
  12: 'ДЕКАБРЬ',
};

export const EXPENCES = {
  category: [
    { value: 'goods', label: 'Продукты' },
    { value: 'alco', label: 'Алкоголь' },
    { value: 'fun', label: 'Развлечение' },
    { value: 'health', label: 'Здоровье' },
    { value: 'transport', label: 'Транспорт' },
    { value: 'house', label: 'Все для дома' },
    { value: 'tech', label: 'Техника' },
    { value: 'utilities', label: 'Комуналка, Связь' },
    { value: 'sport', label: 'Спорт, Хобби' },
    { value: 'education', label: 'Образование' },
    { value: 'other', label: 'Прочее' },
  ],

  title: 'Категория товара',
  description: 'Описание товара',
  type:'expense'
}

export const INCOMES = {
  category: [
    { value: 'salary', label: 'ЗП' },
    { value: 'freelance', label: 'Доп. доход' },
  ],
  
  title: 'Категория дохода',
  description: 'Описание дохода',
  type: 'income'
}