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
  exact?: boolean;
  component: string;
}

// Конфиг для примера
const config: ConfigItem[] = [
  {
    path: '/',
    component: components.Home,
    exact: true,
  },
  {
    path: '/books',
    component: components.Books,
    exact: true,
  },
  {
    path: '/books/:id',
    component: components.BooksItem,
  },
  {
    component: components.NotFound
  }
];

export const getComponent = (url: URL, config: ConfigItem[]): string | undefined => {
  for (let i = 0; i < config.length; i++) {

    // console.log(getPathRegEx(config[i].path || '').toString())
    console.log('config path:', config[i].path)
    // console.log(getPathRegEx(config[i].path || '').test(url.pathname))
    console.log('url pathname:', url.pathname)
    console.log('equals?', config[i].path === url.pathname)
    console.log('=====')

    if (config[i].exact) {
      if (config[i].path === url.pathname) {
        return config[i].component
      }
      continue
    }

    if (getPathRegEx(config[i].path || '').test(url.pathname)) {
      return config[i].component
    }
  }
};

// console.log(getComponent(new URL('https://example.com/'), config)) // 'home'
// console.log('RETURN:', getComponent(new URL('https://example.com/books'), config)) // 'books'
// console.log(getComponent(new URL('https://example.com/books/12'), config)) // 'books item'
console.log(getComponent(new URL('https://example.com/whateverpage'), config)) // 'not found'