let initialState = {
  products: [
    {
      id: 1,
      image: 'https://fixrolls.ru/wp-content/uploads/2019/10/Set-Love2-1-1-1.jpg',
      name: 'Сет Love',
    },
    {
      id: 2,
      image: 'https://fixrolls.ru/wp-content/uploads/2019/06/Apelsin-Roll-1.jpg',
      name: 'Апельсин ролл',
    },
    {
      id: 3,
      image: 'https://fixrolls.ru/wp-content/uploads/2019/03/CHiken-Lava.jpg',
      name: 'Чикен лава ролл',
    },
    {
      id: 4,
      image: 'https://fixrolls.ru/wp-content/uploads/2019/03/Filadelfiya-MIX.jpg',
      name: 'Филадельфия микс',
    },
    {
      id: 5,
      image: 'https://fixrolls.ru/wp-content/uploads/2019/03/Filadelfiya-LITE.jpg',
      name: 'Филадельфия Лайт',
    },
    {
      id: 6,
      image: 'https://fixrolls.ru/wp-content/uploads/2019/03/Taj-Hot.jpg',
      name: 'Тай хот',
    },
  ],
  isFetching: false,
};

export const catalogReducer = (state = initialState, action) => {
  return state;
};
