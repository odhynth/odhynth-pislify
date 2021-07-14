import { Component } from "react";
import {Link} from "./Misc";

export class Home extends Component
{
    render()
    {
        return (
            <div className = "Home">
                <h1 className = "Title">
                    Welcome to Great Game Dev, here you'll find all the resources you need to become the next {Link("https://en.wikipedia.org/wiki/Toby_Fox","Toby Fox",true)}
                </h1>
            </div>
        );
    }
}