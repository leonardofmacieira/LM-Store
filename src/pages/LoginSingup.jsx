import React from 'react'
import './CSS/LoginSignup.css'

function LoginSingup() {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Nome'/>
          <input type='email' placeholder='E-Mail'/>
          <input type='password' placeholder='Senha'/>
        </div>
        <button>Entrar</button>
        <p className='loginsignup-login'>Já tem uma conta? <span>Entrar</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>Para continuar, eu concordo com os termos de uso e privacidade</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup