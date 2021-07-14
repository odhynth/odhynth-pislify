import { Component } from "react";
import {Link} from "./Misc";
import { Collab } from "./Misc";
import { GenImageWithCaption } from "./Misc";

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
                <div>
                    <h2 className = "Title">
                        I want to:
                    </h2>
                    <a href="https://google.com">{GenImageWithCaption("makeAgame.png","Make A Game")}</a>
                    <a href="https://google.com">{GenImageWithCaption("makeAgameEngine.png","Make A Game Engine")}</a>
                    <a href="https://google.com">{GenImageWithCaption("makeAmobile.png","Make A Mobile Game")}</a>
                    <a href="https://google.com">{GenImageWithCaption("becomeA3dArtist.png","Become a 3D artist")}</a>
                    <a href="https://google.com">{GenImageWithCaption("becomeA2dArtist.png","Become a 2D artist")}</a>
                    <a href="https://google.com">{GenImageWithCaption("becomeDesigner.png","Become a Game Designer")}</a>
                </div>
            </div>
        );
    }
}