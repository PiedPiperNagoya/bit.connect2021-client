export default {
  convBase64 (name, image) {
    return `data:image/${name.split('.').pop()};base64,${image}`
  }
}