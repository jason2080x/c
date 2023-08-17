const yaml = require("js-yaml")
document.addEventListener("DOMContentLoaded", () => {
  const txtYaml = document.getElementById("txt-yaml")
  const txtJson = document.getElementById("txt-json")
  const customEvent = new Event("input", { bubbles: true, cancelable: false })
  txtJson.addEventListener("input", () => {
    if (txtJson.value.trim()) {
      try {
        const obj = JSON.parse(txtJson.value)
        txtYaml.value = yaml.dump(obj)
      } catch (e) {
        txtYaml.value = e.message
      }
    } else {
      txtYaml.value = ""
    }
    txtYaml.dispatchEvent(customEvent)
  })
})
