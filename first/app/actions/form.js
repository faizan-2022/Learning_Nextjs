"use server"
import fs from "fs/promises"

export const submitAction = (e)=>{
    "use server"
    
    console.log(e.get("name"), e.get("address"))

    fs.writeFile("faizan.txt", "Hey I am good");
}