import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const MatkulList = () => {
const [matkuls, setMatkul] = useState([]);

useEffect(() => {
    getMatkuls(); 
 }, []);
 
 const getMatkuls = async () => {
     const response = await axios.get("http://localhost:5000/matkuls");
     setMatkul(response.data);
 };

 const deleteMatkul = async(id) =>{
    try {
        await axios.delete(`http://localhost:5000/matkuls/${id}`);
        getMatkuls();
    } catch (error){
        console.log(error);
    }
 };


  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className="button is-dark">Tambah Data</Link>
            <tabel className="table is-striped is-fullwidt">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Tanggal</th>
                        <th>Mata Kuliah</th>
                        <th>Tugas</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {matkuls.map((matkul, index) => (
                        <tr key={matkul.id}>
                            <td>{index + 1}</td>
                            <td>{matkul.tanggal}</td>
                            <td>{matkul.matkul}</td>
                            <td>{matkul.tugas}</td>
                            <td>{matkul.status}</td>
                            <td>
                                <Link to={`edit/${matkul.id}`} className = "button is-small is-info">Edit</Link>
                                <button onClick={()=> deleteMatkul(matkul.id)} className = "button is-small is-danger">Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </tabel>
        </div>
    </div>
  );
};

export default MatkulList;
