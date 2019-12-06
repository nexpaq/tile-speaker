import React from 'react';
import './MainPage.css';


class MainPage extends React.Component {
    constructor(){
        super()
        this.state = {

        }
        this.speakerButtonClickHandler = this.speakerButtonClickHandler.bind(this)
    }

    speakerButtonClickHandler() {

        this.setState(changeState => {
            document.getElementById('speaker-button').classList.toggle('active');
        if (document.getElementById('speaker-button').classList.contains('active')) {
            console.log('connect')
            //   Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'Connect', []);
        } else {
            console.log('disconnect')
            //   Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'Disconnect', []);
        }
        }
        )

        
    }

    render() {
        return <div id="wrapper" className="wrapper">
            <div className="page page--main" id="pageMain">
                <div id="speaker-control" className="speaker-control" >
                    <button onClick={this.speakerButtonClickHandler} className="speaker-button" id="speaker-button"><i className="material-icons">power_settings_new</i></button>
                </div>
            </div>
        </div>;
    }
}



// if (window.ModuwareAPIIsReady) {
//     ApiReadyActions();
// } else {
//     document.addEventListener("WebViewApiReady", () => ApiReadyActions(), { once: true });
// }

//  function speakerButtonClickHandler() {
//     document.getElementById('speaker-button').classList.toggle('active');
//     if (document.getElementById('speaker-button').classList.contains('active')) {
//         console.log('connect')
//         // document.getElementById('speaker-button').classList.remove('active');
//         //   Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'Connect', []);
//     } else {
//         console.log('disconnect')
//         // document.getElementById('speaker-button').classList.add('active');
//         //   Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'Disconnect', []);
//     }
// }



// function MainPageOld() {


//     return (
//         <div id="wrapper" className="wrapper">
//             <div className="page page--main" id="pageMain">
//                 <div id="speaker-control" className="speaker-control" >
//                     <button className="speaker-button" id="speaker-button"><i className="material-icons">power_settings_new</i></button>
//                     {/* <span className="explanation explanation--power-on hidden" id="explanationPowerOn">
//                         To start using speaker module turn it on
//                     </span>
//                     <span className="explanation explanation--connect hidden" id="explanationConnect">
//                         To connect speaker module go to <strong>settings -> bluetooth</strong>, then <strong>pair Moduware speaker</strong>
//                     </span> */}
//                 </div>
//                 {/* <div id="default-state-control" className="default-state-control">
//                     <span>Turn on when plugged in</span>
//                     <label id="default-state-control-label" className="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="default-state-switch">
//                         <input type="checkbox" id="default-state-switch" className="mdl-switch__input" />
//                         <span className="mdl-switch__label"></span>
//                     </label>
//                 </div> */}
//             </div>

//             {/* <div className="page page--main" id="pageMain-zh">
//                 <div id="speaker-control" className="speaker-control" >
//                     <button className="speaker-button" id="speaker-button-zh"><i className="material-icons">power_settings_new</i></button>
//                     <span className="explanation explanation--power-on hidden" id="explanationPowerOn-zh">
//                     请开启扬声器模块以使用
//                     </span>
//                     <span className="explanation explanation--connect hidden" id="explanationConnect-zh">
//                     要连接扬声器模块，请转至<strong>设置 -> 蓝牙</strong>，然后<strong>配对Moduware扬声器</strong>
//                     </span>
//                 </div>
//                 <div id="default-state-control-zh" className="default-state-control">
//                     <span>插入时开启</span>
//                     <label id="default-state-control-label-zh" className="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="default-state-switch-zh">
//                         <input type="checkbox" id="default-state-switch-zh" className="mdl-switch__input" />
//                         <span className="mdl-switch__label"></span>
//                     </label>
//                 </div>
//             </div> */}
//         </div>

//     )
// }



export default MainPage;