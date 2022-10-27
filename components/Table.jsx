import { useEffect, useState } from "react"


const tableData = {
    columns: ['N° Folio', 'Proveedor', 'Tipo', 'Monto', 'Fecha de pago'],
    rows: [
        { folio: 6574743, proveedor: 'Soc. Import. Y Exp. Bash Ltda.', tipo: 'Cedida', monto: 1000000, fecha: 'fecha' },
        { folio: 6574744, proveedor: 'Soc. Import. Y Exp. Bash Ltda.', tipo: 'Cedida', monto: 1000000, fecha: 'fecha' },
        { folio: 6574745, proveedor: 'Soc. Import. Y Exp. Bash Ltda.', tipo: 'Cedida', monto: 1000000, fecha: 'fecha' }
    ]
}
const Table = () => {


    const [data, setData] = useState()

    useEffect(() => {
        console.log('originalState', data)
        if (!data) {
            setData(tableData.rows)
        }
    }, [data])

    const sortTable = () => {
        const sorted = [...data].sort((a, b) => b.folio - a.folio)      
       
        setData(sorted)
    }

    return (
        <div className="w-full">
            <button onClick={sortTable}>asdbvhasd</button>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="h-[50px]">
                        <th><input defaultChecked type="radio" /></th>
                        {tableData.columns.map(e => <th key={e} className='cursor-pointer' ><button type="button" onClick={() => sortTable()}>{e}</button></th>)}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((r, i) => {
                        return (
                            <tr key={i}>
                                <td><input defaultChecked type="radio" /></td>
                                <td>{r.folio}</td>
                                <td>{r.proveedor}</td>
                                <td>{r.tipo}</td>
                                <td>{r.monto}</td>
                                <td>{r.fecha}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table