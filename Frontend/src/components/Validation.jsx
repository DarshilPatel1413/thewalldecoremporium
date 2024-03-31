

function Validation(values) {
    
    let error = {}


    if(values.email === ""){
        error.email = "Enter your email.."
    }else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Enter your passsword.."
    }else{
        error.password =""
    }
  return error
}

export default Validation
