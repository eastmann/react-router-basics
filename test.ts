const getPathRegEx = (template: string): RegExp => {
  const templateMather = template.replace(/:[^\s\/]+/g, '[\\w]+')

  return new RegExp(templateMather)
}

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

interface ConfigItem {
  path?: string;
  component: string;
}

// Конфиг для примера
const config: ConfigItem[] = [
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

export const getComponent = (url: URL, config: ConfigItem[]): string | undefined => {
  for (let i = 0; i < config.length; i++) {
    if (getPathRegEx(config[i].path || '').test(url.pathname)) {
      return config[i].component
    }
  }
};

// console.log(getComponent(new URL('https://example.com/'), config)) // 'home'
// console.log(getComponent(new URL('https://example.com/books/12'), config)) // 'books item'
// console.log(getComponent(new URL('https://example.com/books/create'), config)) // 'books item create'
// console.log(getComponent(new URL('https://example.com/books/abc'), config)) // 'books item'
console.log(getComponent(new URL('https://example.com/whateverpage'), config)) // 'home'