import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Matkul = db.define('matkuls',{
    tanggal: DataTypes.STRING,
    matkul: DataTypes.STRING,
    tugas: DataTypes.STRING,
    status: DataTypes.STRING
},{
    freezeTableName:true
});

export default Matkul;

(async()=>{
    await db.sync();
})();