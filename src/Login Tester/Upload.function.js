import { auth, storage } from "../firebase/config";
import {DocumentPickerResponse} from "react-native-document-picker";

const Add = async () =>{
    try {
        const res = await 
        DocumentPickerResponse.pick({
          type: [DocumentPickerResponse.types.images],
        })
        console.log(
          res.uri,
          res.type,
          res.name,
          res.size,
        )
      } catch (err) {
        if (DocumentPickerResponse.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err
        }
      }
}

export {Add}