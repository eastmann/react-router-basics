// new RegExp(string.replace(':id','.+'), '')

const components = {
  Home: 'home',
  Books: 'books',
  BooksItem: 'books item',
  BooksItemEdit: 'books item edit',
  BooksItemCreate: 'books item create',
  Topics: 'topics',
  TopicsItem: 'topics item',
  NotFound: 'not found',
}

// interface ConfigItem {
//   path?: string;
//   component: string;
// }

// Конфиг для примера
// const config: ConfigItem[] = [
const config = [
  {
    path: '/books/:id/edit',
    component: components.BooksItemEdit,
  },
  {
    path: '/books/create',
    component: components.BooksItemCreate,
  },
  {
    path: '/books/:id',
    component: components.BooksItem,
  },
  {
    path: '/books',
    component: components.Books,
  },
  {
    path: '/topics/:id',
    component: components.TopicsItem,
  },
  {
    path: '/topics',
    component: components.Topics,
  },
  {
    path: '/',
    component: components.Home,
  },
];

// getComponent(new URL('https://example.com/'), config); // 'home'
// getComponent(new URL('https://example.com/books/12'), config); // 'books item'
// getComponent(new URL('https://example.com/books/create'), config); // 'books item create'
// getComponent(new URL('https://example.com/books/abc'), config); // 'books item'
// getComponent(new URL('https://example.com/whateverpage'), config); // 'home'

// export const getComponent = (url: URL, config: ConfigItem[]): string => {
const getComponent = (url, config) => {
  const configItem = config.filter(item => {
    const regex = new RegExp(item.path.replace(':id','.+'), '')
    // console.log('URL:', url.pathname)
    // console.log('TEST URL:', regex.test(url.pathname))
    console.log('component', config[component])
    return regex.test(url.pathname)
    // regex.test(item.path)
    // new RegExp(item.path.replace(':id','.+'), '') === url.pathname
  });
  // const regex = new RegExp(url.pathname.replace(':id','.+'), '')
  // console.log('configItem:', configItem);
  // console.log('configItem:', configItem);
  return configItem
};

// console.log(getComponent(new URL('https://example.com/'), config));
console.log(getComponent(new URL('https://example.com/books/hwgehw'), config));

// getComponent(new URL('https://example.com/books/12'), config)