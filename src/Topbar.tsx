import { Component } from "react";
import { Logo } from "./Misc";


export class Topbar extends Component
{
    render()
    {
        return(
            <div className = "Topbar">
            <Logo></Logo>
            </div>
        );
    }
}