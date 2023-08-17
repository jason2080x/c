const yaml = require("js-yaml")
document.addEventListener("DOMContentLoaded", () => {
  const txtYaml = document.getElementById("txt-yaml")
  const txtJson = document.getElementById("txt-json")
  const customEvent = new Event("input", { bubbles: true, cancelable: false })
  txtYaml.addEventListener("input", () => {
    if (txtYaml.value.trim()) {
      try {
        const obj = yaml.load(txtYaml.value)
        txtJson.value = JSON.stringify(obj, null, 2)
      } catch (e) {
        txtJson.value = e.message
      }
    } else {
      txtJson.value = ""
    }
    txtJson.dispatchEvent(customEvent)
  })
})
