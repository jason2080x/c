const yaml = require("js-yaml")
document.addEventListener("DOMContentLoaded", () => {
  const txtInput = document.getElementById("txt-input")
  const txtOutput = document.getElementById("txt-output")
  const inputImportFromFile = document.getElementById("input-import-from-file")
  const inputCopyToClipboard = document.getElementById("input-copy-to-clipboard")
  const outputImportFromFile = document.getElementById("output-import-from-file")
  const outputCopyToClipboard = document.getElementById("output-copy-to-clipboard")
  const inputFile = document.getElementById("input-file")
  const outputFile = document.getElementById("output-file")
  txtInput.addEventListener("input", () => {
    if (txtInput.value.trim()) {
      try {
        const obj = yaml.load(txtInput.value)
        txtOutput.value = JSON.stringify(obj, null, 2)
      } catch (e) {
        txtOutput.value = e.message
      }
    } else {
      txtOutput.value = ""
    }
    txtOutput.dispatchEvent(new Event("input", { bubbles: true, cancelable: false }))
  })
  // 从文件导入
  inputImportFromFile.addEventListener("click", () => {
    inputFile.click()
  })
  inputFile.addEventListener("change", (event) => {
    const file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = (() => {
      return function (e) {
        txtInput.value = e.target.result
        txtInput.dispatchEvent(new Event("input", { bubbles: true, cancelable: false }))
      }
    })(file)
    reader.readAsText(file)
    inputFile.value = ""
  })
  outputImportFromFile.addEventListener("click", () => {
    outputFile.click()
  })
  outputFile.addEventListener("change", (event) => {
    const file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = (() => {
      return function (e) {
        txtOutput.value = e.target.result
        txtOutput.dispatchEvent(new Event("input", { bubbles: true, cancelable: false }))
      }
    })(file)
    reader.readAsText(file)
    outputFile.value = ""
  })
  // 复制
  inputCopyToClipboard.addEventListener("click", () => {
    navigator.clipboard.writeText(txtInput.value)
    new bootstrap.Modal(document.getElementById("modal"), {}).show()
  })
  outputCopyToClipboard.addEventListener("click", () => {
    navigator.clipboard.writeText(txtOutput.value)
    new bootstrap.Modal(document.getElementById("modal"), {}).show()
  })
})
