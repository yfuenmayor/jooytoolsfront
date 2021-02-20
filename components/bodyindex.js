import React from 'react';
import Cardindex from './cardsindex';

const Bodyindex = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <Cardindex 
                    opcion="Reportes"
                    link="/reportes"
                    descripcion="Consultar y generar varios tipos de reportes"
                />
                <Cardindex 
                    opcion="Support tools"
                    link="/trips"
                    descripcion="Herramientas varias"
                />
            </div>
        </div>
    );
};

export default Bodyindex;