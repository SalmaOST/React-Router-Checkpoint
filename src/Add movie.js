import React from "react"

const AddMovie = props =>{
     return (
       <>
       <div className="add">
                <input className="Add-m" type="text" id="add" placeholder="Mettez votre lien ici"></input>
                <br/>
                <input className="Add-m" type="text" id="add" placeholder="Mettez la source de l'image"></input>
                <br/>
                <input className="Add-m" type="text" id="add" placeholder="Mettez la description du film"></input>
                <br/>
                <input className="Add-m" type="text" id="add" placeholder="Mettez le titre du film"></input>
                <br/>
                <input className="Add-m" type="text" id="add" placeholder="Mettez la note du film"></input>
                <br/>
                <br/>
                
        </div>
        <br/>
       
        </>
     )
}
export default AddMovie