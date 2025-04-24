const validateData =(email,password)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    
    const isValidEmail = emailRegex.test(email)
    const isValidePassword = passwordRegex.test(password)

    if(!isValidEmail) return "Email Id is not valid"
    if(!isValidePassword) return "Password is not valid"


    return null
}

export default validateData