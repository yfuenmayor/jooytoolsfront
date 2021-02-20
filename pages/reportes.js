
// import 'bootstrap'
import { useState } from 'react';
import Layout from '../components/layouts/layout';
import Searchreport from '../components/searchreport';

const Reportes = () => {

    const [titleReport, setTitleReport] = useState('');

    return (
        <div>
            <Layout>
                <div className="container mt-3">
                    <h2>Reportes {titleReport}</h2>     
                    
                    <div className="row">
                        <div className="mt-2">
                            <button 
                                type="button" 
                                class="btn btn-sm btn-outline-primary m-1"
                            >Bateria</button>
                            <button 
                                type="button" 
                                class="btn btn-sm btn-outline-primary m-1"
                            >DTC´s</button>
                            <button 
                                type="button" 
                                class="btn btn-sm btn-outline-primary m-1"
                            >Viajes</button>
                        </div>
                    </div>
                    <Searchreport />
                    
                </div>
            </Layout>
        </div>
    );
};

export default Reportes;