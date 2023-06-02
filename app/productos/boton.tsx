"use client"

function FnAlerta(){
    alert("hice click")
}

export default function Boton (){
    return(
        <button className="rounded-full ..." onClick={FnAlerta}>Save Changes</button>
    )
}
