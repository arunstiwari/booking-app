
const validate = (values) => {

    let errors ={};

    if (!values.email){
        errors.email = 'Email is required';
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email ='Email should be of proper format';
    }

    if (!values.password){
        errors.password = 'Password is required';
    }else if(values.password.length < 8){
        errors.password = 'Password should not be less than 8 characters';
    }

    return errors;

}

export default validate;