const yaml = require("js-yaml")
document.addEventListener("DOMContentLoaded", () => {
  const txtYaml = document.getElementById("txt-yaml")
  const preYaml = document.getElementById("pre-yaml")
  const codeYaml = document.getElementById("code-yaml")
  const txtJson = document.getElementById("txt-json")
  const preJson = document.getElementById("pre-json")
  const codeJson = document.getElementById("code-json")
  txtYaml.addEventListener(
    "input",
    function () {
      codeYaml.innerHTML = txtYaml.value
      try {
        const obj = yaml.load(txtYaml.value)
        txtJson.value = JSON.stringify(obj, null, 2)
        codeJson.innerHTML = txtJson.value
        Prism.highlightAll()
      } catch (e) {
        txtJson.value = e.message
        codeJson.innerHTML = txtJson.value
      }
    },
    false
  )
  txtJson.addEventListener(
    "input",
    function () {
      codeJson.innerHTML = txtJson.value
      Prism.highlightAll()
    },
    false
  )
  const rectYaml = txtYaml.getBoundingClientRect()
  preYaml.style.left = rectYaml.left + "px"
  preYaml.style.top = rectYaml.top + "px"
  preYaml.style.width = rectYaml.width + "px"
  preYaml.style.height = rectYaml.height + "px"
  const rectJson = txtJson.getBoundingClientRect()
  preJson.style.left = rectJson.left + "px"
  preJson.style.top = rectJson.top + "px"
  preJson.style.width = rectJson.width + "px"
  preJson.style.height = rectJson.height + "px"
})
