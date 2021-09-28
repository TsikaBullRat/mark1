import { auth } from "../firebase/config"

const Submit = (email, password, fname, lname) =>{
    let name = fname + " " + lname
    auth.createUserWithEmailAndPassword(email, password)
        .then(user=>{
            console.log(user)
            user.user.updateProfile({
                displayName: name,
            })
            user.user.sendEmailVerification()
            alert("login succesfull")
        })
        .catch(err=>{
            console.log(err)
        })
}

export { Submit }