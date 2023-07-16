let loginRegisterDiv = null
import { enabled, setDiv } from "./index.js"
import { showLogin } from "./login.js"
import { showRegister } from "./register.js"
export const handleLoginRegister = () => {
  loginRegisterDiv = document.getElementById("logon-register") 
  const login = document.getElementById("logon")
  const register = document.getElementById("register")
  loginRegisterDiv.addEventListener("click", (e) => {
    if (enabled && e.target.nodeName === "BUTTON") {
        if (e.target === login) {
            showLogin()
        } else if (e.target === register) {
            showRegister()
        }
    }
  })
}

export const showLoginRegister = () => {
    setDiv(loginRegisterDiv)
}