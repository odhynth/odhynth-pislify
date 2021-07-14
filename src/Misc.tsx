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

export class Collab extends Component
{
    render(){
        let ps = new Logo(this.props);
        let od = new Logo(this.props);
        ps.logoPath = "pislify.png";
        od.logoPath = "odhynth.png";
        return(
            <div className = "Collab">
                
                <p>A Pislify and Odhynth collaboration</p>
                <p><div className = "CollabElement">Pislify : {Link("https://www.youtube.com/channel/UCMYbr59_vlrWUBCwlmsgX8Q","Youtube",true)} {Link("https://twitter.com/pislify1","Twitter",true)}</div> </p>
                <p><div className = "CollabElement">Odhynth : {Link("https://www.youtube.com/channel/UCA2Yx1G13yaNP7oVebonmVw","Youtube",true)} {Link("https://twitter.com/odhynth","Twitter",true)}</div> </p>
            </div>
        );
    }
}

export class Logo extends Component
{
    public logoPath = "devico.png";
    
    render()
    {
        return(
            <div className="LogoContainer">
            <img src = {this.logoPath}  className = "Logo"></img>
            </div>
        );
    }
    
}

