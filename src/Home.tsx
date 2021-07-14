import { Component } from "react";
import {Link} from "./Misc";
import { Collab } from "./Misc";
import { GenImageWithCaption } from "./Misc";
import { Topbar } from './Topbar';
export class Home extends Component
{
    render()
    {
        return (
            <header className="App-header">
            <div><Topbar></Topbar></div>
            <div>
                <div className = "Home">
                    <h1 className = "Title">
                        {/* TODO: add page  */}
                        Welcome to Great Game Dev,{"\n"}
                        here you'll find all the resources you need to make the next {Link("https://en.wikipedia.org/wiki/Toby_Fox","Great Game",true)}
                    </h1>                
                </div>
                <div>
                    <Collab></Collab>
                </div>
                <div>
                    <h2 className = "Title">
                        I want to:
                    </h2>
                    <a href="/GameMaking">{GenImageWithCaption("makeAgame.png","Make A Game")}</a>
                    <a href="/GameEngine">{GenImageWithCaption("makeAgameEngine.png","Make A Game Engine")}</a>
                    <a href="MobileGame">{GenImageWithCaption("makeAmobile.png","Make A Mobile Game")}</a>
                    <a href="/3D-Artist">{GenImageWithCaption("becomeA3dArtist.png","Become a 3D artist")}</a>
                    <a href="/2D-Artist">{GenImageWithCaption("becomeA2dArtist.png","Become a 2D artist")}</a>
                    <a href="/GameDesigner">{GenImageWithCaption("becomeDesigner.png","Become a Game Designer")}</a>
                </div>
            </div>


             
           </header>
        );
    }
}