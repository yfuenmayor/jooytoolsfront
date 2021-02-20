import React from 'react';

const Searchreport = () => {
    return (
        <div classNameName="row">
            <form className="row g-3">
                <div className="col-auto">
                    <label for="inputPassword2" className="visually-hidden">Password</label>
                    <input type="date" className="form-control" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="col-auto">
                    <label for="inputPassword2" className="visually-hidden">Password</label>
                    <input type="date" className="form-control" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="col-auto">
                    <select className="form-select" aria-label="Default select example">
                        <option disabled selected>Seleccione un tenant</option>
                        <option value="1">Sura Directo</option>
                        <option value="2">Sura:Falabella</option>
                        <option value="3">Sura:Cencosud</option>
                        <option value="3">Consorcio</option>
                    </select>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Generar</button>
                </div>
            </form>
        </div>
    );
};

export default Searchreport;