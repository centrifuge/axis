export const copyToClipboard = (value: string): Promise<any> => {
  if (!document || !window) throw new Error('this only works in the Browser')
  // if navigator and clipboard api exists
  if (window.navigator && window.navigator.clipboard) {
    return window.navigator.clipboard.writeText(value)
  }

  return new Promise((resolve, reject) => {
    try {
      let textField = document.createElement('textarea')
      textField.innerText = value
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
      resolve(value)
    } catch (e) {
      console.log(e)
      reject(e)
    }
  })
}
