import { useState, useRef} from 'react'

import { useNavigate } from 'react-router-dom';


import './Auth.css'



function Auth({getAuthState}){

    let dataAuth = {
        login:null,
        pass:null,
        subscribe:false
    }    

    

    const navigate = useNavigate()

    const formReset = useRef(null);
    const refLogin = useRef(null);
    const refPass = useRef(null);
    const refAuth = useRef(null);


    const [authStep, setAuthStep] = useState(false)

    const [isLoginEmpty, setLoginEmpty] = useState("")

    const [isPassEmpty, setPassEmpty] = useState("")

    const [subscribe, setSubscribe] = useState(false)



    let authStore = false
    if(sessionStorage.getItem('authUser') !== null){
        authStore = true
    }

    const [showAuth, setShowAuth] = useState(!authStore)


    function getValidityFields(fieldVal, blockErr){
        if(fieldVal.length >= 4){
            blockErr.current.textContent = ""
            return fieldVal
        }

        if(fieldVal.length === 0){
            blockErr.current.textContent = "Поле не должно быть пустым"
            refAuth.current.textContent = ""
        }else if(fieldVal.length <= 4){
            blockErr.current.textContent = "Поле должно содержать не менее 4-х символов"
            refAuth.current.textContent = ""
        }
        return false
    }


    function submitHundler(e){
        e.preventDefault();

        dataAuth.login = getValidityFields(isLoginEmpty, refLogin)
        dataAuth.pass = getValidityFields(isPassEmpty, refPass)
        
        if(dataAuth.login && dataAuth.pass){

            authStore ? setShowAuth(showAuth) : setShowAuth(!showAuth)

            if(!authStep){
                sessionStorage.setItem('authUser', JSON.stringify(dataAuth))
                refAuth.current.textContent = "Вы зарегистрированы!"
            }else{ 
                let getAuth =  JSON.parse(sessionStorage.getItem('authUser'))
                if(getAuth !== null && isLoginEmpty === getAuth.login && isPassEmpty === getAuth.pass){
                    refAuth.current.textContent = ""
                    getAuthState(true)
                    navigate('/showcase')
                }else{
                    refAuth.current.textContent = "Логин или пароль неверен"

                }
                
            }
        }
            
        return false
    }


    function getCurrentStep(){
        formReset.current.reset();
        setLoginEmpty("")
        setPassEmpty("")

        refLogin.current.textContent = ""
        refPass.current.textContent = ""
        refAuth.current.textContent = ""

        return setAuthStep(!authStep)
    }


    return (
        <div className="authuser">
          
        <div className='authuser__wrapper'>
            <p className={showAuth ? 'authuser__step-auth' : 'authuser__step'}>
                <span onClick={getCurrentStep} >
                    {authStep ? 'Зарегистрироваться ' : 'Авторизоваться'}
                </span>
            </p>
            
            <h2 className='authuser__title'>
                {authStep ? 'Вход' : 'Регистрация'}
            </h2>

            <form action="#" method='GET' className='authuser__form form' ref={formReset}>

                
                <input type="text" placeholder='Логин' className='form__field'  autoComplete="new-login"  onInput={(e) => setLoginEmpty(e.target.value)}  />
                <p className='form__field-error' ref={refLogin}></p>


                <input type="password" placeholder='Пароль' className='form__field' autoComplete="new-password" onInput={(e) => setPassEmpty(e.target.value)}  />
                <p className='form__field-error' ref={refPass}></p>


                <div className='form__checkbox'>
                    <input type="checkbox" id="subscribe" hidden  />
                    <label htmlFor="subscribe" className='form__checkbox-label' onClick={() => setSubscribe(!subscribe)}>
                        <span></span>
                        Я согласен получать обновления на почту
                        {subscribe ? dataAuth.subscribe = true : dataAuth.subscribe = false}
                    </label>
                    
                </ div>
               
                <p className={authStep ? "form__field-error" : "form__reg-sucsess"} ref={refAuth}></p>
                
                <button type="submit"  onClick={submitHundler}   className='primary-btn form__btn-submit' >
                    {authStep ? 'Войти' : 'Зарегистрироваться'}
                </button>
            </form>
        </div>
   
</div>
    )

}


export default Auth
