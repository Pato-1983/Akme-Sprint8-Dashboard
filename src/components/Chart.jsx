import { useEffect, useState, useRef } from 'react';
import ChartRow from './ChartRow';


function Chart (){

    const [productos, setProductos] = useState([])

    useEffect (()=>{
        
        fetch("https://akmesprint8.herokuapp.com/api/products")
        .then(response => response.json())
        .then(data =>{setProductos(data.products)
        })
    },[])

    return (
        
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Características</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            productos.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;