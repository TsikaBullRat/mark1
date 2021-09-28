import { auth } from "../firebase/config"

const Submit = (email, password, fname, lname, phoneNumber) =>{
    let name = fname + " " + lname
    auth.createUserWithEmailAndPassword(email, password)
        .then(user=>{
            console.log(user)
            user.user.updateProfile({
                displayName: name,
            })
            user.user.updatePhoneNumber({
                phoneNumber: phoneNumber
            })
            alert("login succesfull")
        })
        .catch(err=>{
            console.log(err)
        })
}

export { Submit }