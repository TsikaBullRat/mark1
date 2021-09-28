import { auth } from "../firebase/config"

const Submit = (email, password) =>{
    auth.signInWithEmailAndPassword(email, password)
        .then(()=>{
            alert("login succesfull")
        })
        .catch(err=>{
            console.log(err)
        })
}

export { Submit }

