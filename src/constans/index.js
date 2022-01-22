export const Month = {
  1: 'Январь',
  2: 'Февраль',
  3: 'Март',
  4: 'Апрель',
  5: 'Май',
  6: 'Июнь',
  7: 'Июль',
  8: 'Август',
  9: 'Сентябрь',
  10: 'Октябрь',
  11: 'Ноябрь',
  12: 'Декабрь',
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