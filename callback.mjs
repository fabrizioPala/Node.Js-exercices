import {writeFile} from "fs";
const content= "here is the file's content"
writeFile("file.txt",content,(error=>{
    if(error){
        console.log("an error has occurred", error )
        return
    }
    console.log("the file has been created")
}))