export const COLUMNS = {
    Documentos: [
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Nombre Documento',
            accessor: 'nombre'
        },
        {
            Header: 'Fecha de Última Edición',
            accessor: 'fecha'
        },
        {
            Header: 'Descripción',
            accessor: 'descripcion'
        }
        ,
        {
            Header: 'Tipo',
            accessor: 'tipo'
        },
        {
            Header: 'Acciones'
        }
    ],
    Solicitudes: [
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Fecha Ingreso',
            accessor: 'fecha_in'
        },
        {
            Header: 'Fecha Respuesta',
            accessor: 'fecha_res'
        },
        {
            Header: 'Estado',
            accessor: 'estado'
        }
        ,
        {
            Header: 'Descripción',
            accessor: 'descripcion'
        },
        {
            Header: 'Acciones'
        }
    ]
}