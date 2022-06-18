const token_name = 'token'

export default {
  registerToken(token) {
    document.cookie = `${token_name}=${token}`
  },
  getToken() {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith(token_name))
    return cookie ? cookie
        .split('=')[1]
      : ''
  },
  clearToken () {
    document.cookie = `${token_name}=; expires=0`
  },
}