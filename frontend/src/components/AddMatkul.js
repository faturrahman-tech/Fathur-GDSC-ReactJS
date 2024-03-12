import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMatkul = () => {
const [tanggal, setTanggal] = useState("");
const [matkul, setMatkul] = useState("");
const [tugas, setTugas] = useState("");
const [status, setStatus] = useState("Selesai");
const navigate = useNavigate();

const saveMatkul = async (e) =>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/matkuls",{
            tanggal,
            matkul,
            tugas,
            status
        });
        navigate("/");

    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveMatkul}>
                <div className="field">
                    <label className="label">Tanggal</label>
                    <div className="control">
                        <input type="date" className="input"
                        value={tanggal}
                        onChange={(e)=> setTanggal(e.target.value)}
                        placeholder="Tanggal" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Mata Kuliah</label>
                    <div className="control">
                        <input type="text" className="input"
                        value={matkul}
                        onChange={(e)=> setMatkul(e.target.value)}
                        placeholder="Matkul" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tugas</label>
                    <div className="control">
                        <input type="text" className="input" 
                        value={tugas}
                        onChange={(e)=> setTugas(e.target.value)}
                        placeholder="Tugas" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Status</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select 
                            value={status}
                            onChange={(e)=> setStatus(e.target.value)}
                            >
                                <option value = "Selesai">Selesai</option>
                                <option value = "Belum Selesai">Belum Selesai</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button type="submit" className="button is-success">Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddMatkul;
