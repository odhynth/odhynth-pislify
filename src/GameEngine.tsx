import { Component } from "react";
import {Link} from "./Misc";
import { Collab } from "./Misc";
import { GenImageWithCaption } from "./Misc";
import { Topbar } from './Topbar';
export class GameEngine extends Component
{
    render()
    {
        return(
            <header className="App-header">
            <div><Topbar></Topbar></div>    
            <div>
                <div className = "Home">
                <h1>
                A {Link("https://en.wikipedia.org/wiki/Game_engine","Game Engine" , true)}  can be made using a <a href="#1">game librairy</a> or  <a href="#2">rendering librairy </a> or from  <a href="#3">scratch </a>
                <p className = "Reading">
                    <h3 id = "1">Game Librairies or Frameworks</h3>
                    <small><h6 className = "Readable">Game Librairies help with rendering window management and file loading some times even collision detection , sound and cameras</h6></small>
                    <small><h6 className = "Readable">Examples include:</h6></small>
                    <small><h6 className = "Readable">{Link("https://raylib.com","Raylib ",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://www.lwjgl.org/","Lightweight Java Game Library ",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://www.monogame.net/","Monogame (aka .NET framework) ",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://github.com/OneLoneCoder/videos/blob/master/olcConsoleGameEngine.h","olcConsoleGameEngine",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://github.com/OneLoneCoder/olcPixelGameEngine","olcPixelGameEngine",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://www.panda3d.org/","Panda3D ",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://www.ursinaengine.org/","Ursina ʕ •ᴥ•ʔゝ□",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://love2d.org/","LÖVE 2D",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://phaser.io/","Phaser",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://libgdx.com/","LibGDX",true)}</h6></small>
                    <small><h6 className = "Readable">And many more ...</h6></small>
                    
                </p>
                <p className = "Reading">
                    <h3 id = "2">Rendering librairy or Graphics Librairy</h3>
                    <small><h6 className = "Readable">Rendering librairy or Graphics Librairy are lower level than game frameworks and are harder to use but give alot of flexibiliy</h6></small>
                    <small><h6 className = "Readable">Examples include:</h6></small>
                    <small><h6 className = "Readable">{Link("https://www.opengl.org/","OpenGL ",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://www.vulkan.org/","vulkan ",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://www.khronos.org/opengles/","OpenGLES",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://www.khronos.org/webgl/","WebGL",true)}</h6></small>
                    <small><h6 className = "Readable">And many more ...</h6></small>
                    
                </p>
                <p className = "Reading">
                    <h3 id = "3">From Scrach</h3>
                    <small><h6 className = "Readable">This option givese the most flexibiliy but is very low level, It is using your OS' systems to create an app</h6></small>
                    <small><h6 className = "Readable">Examples include:</h6></small>
                    <small><h6 className = "Readable">{Link("https://en.wikipedia.org/wiki/DirectX","Direct X ",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://developer.apple.com/metal/","Metal ",true)}</h6></small>
                    <small><h6 className = "Readable">{Link("https://en.wikipedia.org/wiki/X_Window_System","X (windowing system for linux)",true)}</h6></small>

                    
                </p>
                
                </h1>
                </div>
                </div>
                </header>
        );
    }
}