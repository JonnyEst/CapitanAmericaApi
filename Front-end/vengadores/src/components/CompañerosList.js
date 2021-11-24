import React from 'react';

const CompañerosList = ({compañero, setCompañero, compañeros, setListUpdated}) => {


    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:3200/api/companeros/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{nombre} = compañero
    const handleUpdate = id => {
        //validación de los datos
        if (nombre === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(compañero)
        }
        fetch('http://localhost:3200/api/companeros/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setCompañero({
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
                {compañeros.map(compañero => (
                    <tr key={compañero.id}>
                        <td>{compañero.id}</td>
                        <td>{compañero.nombre}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(compañero.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(compañero.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default CompañerosList;