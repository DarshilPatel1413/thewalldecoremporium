

function Validation(values) {
    
    let error = {}

    // if(values.fname === ""){
    //     error.fname = "Enter your first name.."
    // }else{
    //     error.fname = ""
    // }
    

    // if(values.lname === ""){
    //     error.lname = "Enter your last name.."
    // }else{
    //     error.lname = ""
    // }

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
