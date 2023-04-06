import { useState } from "react";

export default function Practice(){
    const [players,setPlayers] = useState(
        ["lukaku","ronaldo","richarism","thiago","kante","pulisic","modric"]
    )
   const[newPlayers]= ([..."messi","mbappe"] )
   console.log(newPlayers)
    return<>

    </>
}