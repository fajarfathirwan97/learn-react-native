export var trans = (key) => {
  key = key.split('.')
  let result
  const lang = {
    en: {
      form: {
        username: 'Username',
        password: 'Password',
        login: 'Log In'
      },
      http: {
        fetch: 'Fetching Data Please Wait'
      },
      validate: {
        required: ':field Is Required',
        email: ':field Must Be A Correct Email Address',
        number: ':field Must Be A Number'
      }
    }
  }

  for (let i = 0; i < key.length; i++) {
    if (i === 0)
      result = lang[key[i]]
    else
      result = result[key[i]]
  }
  return result
}
