export var getKey = (key)=>{
  key = key.split('.');
  const lang = {
    form : {
      username: 'Username',
      password: 'Password',
      login : 'Log In'
    },
    http : {
      fetch : 'Fetching Data Please Wait'
    }
  }

  for (i = 0; i < key.length; i++) {
    if(i === 0)
      result = lang[key[i]];
    else
      result = result[key[i]]
  }
  return result
}
