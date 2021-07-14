import { Component } from "react";


export function Link(link:string , name:string, blank:boolean)
{
    return(
        <a
            href = {link}
            target = {blank ? "_blank" : ""}
        > 
            {name}
        </a>
    );
}

export class Logo extends Component
{
    render()
    {
        return(
            <div className="LogoContainer">
            <img src = "devico.png"  className = "Logo"></img>
            </div>
        );
    }
}
