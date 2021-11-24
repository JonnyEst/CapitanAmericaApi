import React from 'react';

const PatrocinadoresList = ({patrocinador, setPatrocinador, patrocinadores, setListUpdated}) => {


    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:3200/api/patrocinadores/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{nombre} = patrocinador
    const handleUpdate = id => {
        //validación de los datos
        if (nombre === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(patrocinador)
        }
        fetch('http://localhost:3200/api/patrocinadores/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setPatrocinador({
            nombre: ''            
        })

        setListUpdated(true)
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {patrocinadores.map(patrocinador => (
                    <tr key={patrocinador.id}>
                        <td>{patrocinador.id}</td>
                        <td>{patrocinador.nombre}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(patrocinador.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(patrocinador.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default PatrocinadoresList;