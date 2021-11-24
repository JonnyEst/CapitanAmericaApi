import React from 'react';

const AliadosList = ({aliado, setAliado, aliados, setListUpdated}) => {


    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:3200/api/aliados/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{nombre} = aliado
    const handleUpdate = id => {
        //validación de los datos
        if (nombre === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(aliado)
        }
        fetch('http://localhost:3200/api/aliados/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setAliado({
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
                {aliados.map(aliado => (
                    <tr key={aliado.id}>
                        <td>{aliado.id}</td>
                        <td>{aliado.nombre}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(aliado.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(aliado.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default AliadosList;