import { Component } from "react";
import {Link} from "./Misc";
import { Collab } from "./Misc";
export class Home extends Component
{
    render()
    {
        return (
            <div>
                <div className = "Home">
                <h1 className = "Title">
                    {/* TODO: add page  */}
                    Welcome to Great Game Dev, here you'll find all the resources you need to make the next {Link("https://en.wikipedia.org/wiki/Toby_Fox","Great Game",true)}
                </h1>
                <line>
                    </line>
                
                </div>
                <div>
                    <Collab></Collab>
                </div>
                <div className = "Home">
                    <h2 className = "Title">
                        I want to:
                    </h2>
                </div>
            </div>
        );
    }
}