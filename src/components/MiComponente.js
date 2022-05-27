import React, {Component} from 'react';

import sprint from '../assets/images/FormatoSprint.png';
import Backlog from '../assets/images/NuevoBacklog.png';
import Calendarizacion from '../assets/images/Calendarizacion.png';
import Instrucciones from '../assets/images/InstruccionesCalendario.png';

class MiComponente extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <h1>Este es el product Backlog</h1>
                <h3>Favor de leer atentamente</h3>
                <div>
                    <img src={ Backlog}/>
                    <h1>Formato Sprint</h1>
                    <img src={ sprint }/>
                    <h1>Calendarizacion</h1>
                    <img src={ Calendarizacion }/>
                    <img src={ Instrucciones }/>
                   

                 </div>
              
               
            </React.Fragment>
            
            
        );
    }
}

export default MiComponente;