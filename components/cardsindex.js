import React from 'react';
import Link from 'next/link';

const Cardindex = (props) => {
    const { link, opcion, descripcion } = props;
    return (
        <div class="col-sm-4 mb-2">
            <div class="card border-primary">
                <div class="card-body">
                    <h5 class="card-title">{opcion}</h5>
                    <p class="card-text">{descripcion}</p>
                    <a href={link} class="btn btn-primary">Go {opcion}</a>
                </div>
            </div>
        </div>
    );
};

export default Cardindex;