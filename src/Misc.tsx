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

export function ButtonLink(link:string , name:string, blank:boolean)
{
    return(
        <div className = "ButtonLink">
            <a
            href = {link}
            target = {blank ? "_blank" : ""}
        > 
            {name}
        </a>
        </div>
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
