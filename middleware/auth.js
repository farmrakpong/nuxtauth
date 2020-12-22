export default {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'me', method: 'get', propertyName: 'data.user' },
          logout: false
        }
      }
    },
    redirect: {
      login: '/login'
    }
  }