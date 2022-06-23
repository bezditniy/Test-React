import React, { Component } from 'react'
import "./Main.css"

export default class Main extends Component {
    render() {
        return (
            <div className="Main-container">
                <h1>Rappresent your life with a simple photo</h1>
                <div className="Text-container">
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit est, ullamcorper a vestibulum eu, pulvinar ut orci. Donec gravida orci non suscipit consequat. 
                        Suspendisse ut dui sed tortor ultrices tempus. Phasellus dictum lectus ex, ut placerat massa pharetra at. Nullam felis dolor, volutpat nec congue eget, ornare vitae quam. 
                        In finibus urna vel molestie tempus. Duis et convallis odio, convallis porta eros. Curabitur vel leo turpis. Morbi consequat ante in odio varius hendrerit.
                    </p>    
                    <p>
                        Vestibulum varius pretium mattis. Aliquam vulputate maximus est, quis euismod elit sodales placerat. Proin pretium arcu a odio consectetur, nec vestibulum nisi venenatis. 
                        Nulla eleifend nisi vel pretium aliquam. Cras ornare elementum vehicula. Curabitur at hendrerit nisl. Donec ligula mauris, commodo non diam et, aliquam aliquet lectus. 
                        Maecenas volutpat, nisl in consectetur condimentum, ligula mauris fringilla mauris, eu aliquet mauris ligula at orci. Cras efficitur non massa in auctor. 
                        Sed posuere leo quam, sed varius massa euismod sit amet. Proin vehicula egestas massa. Nullam tempus massa a elementum posuere. Nam ac velit ac purus vestibulum fringilla. 
                        Nunc a tortor posuere, ultrices nisi id, interdum risus. Donec laoreet tempus libero ut viverra. Proin dapibus magna vel urna ornare, et pretium metus facilisis.
                    </p>
                </div>
                <div className="Main-button">
                    <button className="Button">get started</button>
                </div>
            </div>
        )
    }
}
