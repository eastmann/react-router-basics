
const getPathRegEx = (template) => {
  // const template = '/users/:id/edit'
  const templateMather = template.replace(/:[^\s\/]+/g, '[\\w]+')
  // const templateMather = template.replace(/:[^\s/]+/g, '([\\w-]+)')

  return new RegExp(templateMather)
}

const regexp = getPathRegEx('/users/:id/edit');

console.log(regexp)

console.log(regexp.test('/users/12/edit'))
console.log(regexp.test('/users/create/edit'))
console.log(regexp.test('/users'))
console.log(regexp.test('/books'))