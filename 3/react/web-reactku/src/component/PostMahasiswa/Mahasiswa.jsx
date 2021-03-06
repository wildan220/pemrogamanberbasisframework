import React from 'react';

const Mahasiswa = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-Mahasiswa">
                <img src="http://placeimg.com/80/80/mit" alt="Gambar Tumbnail Mahasiswa"/>
            </div>
            <div className="konten-mahasiswa">
                <div className="nim-mahasiswa">{props.nim}</div>
                    <p className="nama-mahasiswa">{props.nama}</p>
                    <p className="alamat-mahasiswa">{props.alamat}</p>
                    <p className="hp-mahasiswa">{props.hp}</p>
                    <p className="angkatan-mahasiswa">{props.angkatan}</p>
                    <p className="status-mahasiswa">{props.status}</p>
                    <p className='waktu'>{props.waktu}</p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}

export default Mahasiswa;