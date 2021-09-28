import { auth } from "../firebase/config";

const Exit = () =>{
    auth.signOut()
        .then(()=>{
            alert("Bye Now")
        })
        .catch(err=>{
            console.log(err)
        })
}

export {Exit}