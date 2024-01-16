// src/components/HospitalService.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HospitalService = () => {
  const [asuransiData, setAsuransiData] = useState([]);
  const [dokterData, setDokterData] = useState([]);
  const [poliklinikData, setPoliklinikData] = useState([]);
  const [rawatJalanData, setRawatJalanData] = useState([]);
  const [permintaanRadiologiData, setPermintaanRadiologiData] = useState([]);
  const [pemeriksaanRadiologiData, setPemeriksaanRadiologiData] = useState([]);
  const [decubitusData, setDecubitusData] = useState([]);

  useEffect(() => {
    // Ambil data asuransi dari server menggunakan Axios
    axios.get('{{base_url_gateway}}/rs-service/asuransi/list')
      .then(response => setAsuransiData(response.data))
      .catch(error => console.error('Error fetching asuransi data:', error));

    // Ambil data temp dokter dari server menggunakan Axios
    axios.get('{{base_url_gateway}}/rs-service/temp-dokter-list')
      .then(response => setDokterData(response.data))
      .catch(error => console.error('Error fetching dokter data:', error));

    // Ambil data list poliklinik copy dari server menggunakan Axios
    axios.get('{{base_url_gateway}}/rs-service/poliklinik/list')
      .then(response => setPoliklinikData(response.data))
      .catch(error => console.error('Error fetching poliklinik data:', error));

    // Ambil data Rawat Jalan dari server menggunakan Axios
    axios.get('{{base_url_gateway}}/rs-service/rawat/jalan?per_page=8')
      .then(response => setRawatJalanData(response.data))
      .catch(error => console.error('Error fetching rawat jalan data:', error));

    // Ambil data permintaan radiologi dari server menggunakan Axios
    axios.get('{{base_url_gateway}}/rs-service/permintaanradiologi')
      .then(response => setPermintaanRadiologiData(response.data))
      .catch(error => console.error('Error fetching permintaan radiologi data:', error));

    // Ambil data pemeriksaan radiologi dari server menggunakan Axios
    axios.get('{{base_url_gateway}}/rs-service/permintaanradiologi/pemeriksaanradiologi')
      .then(response => setPemeriksaanRadiologiData(response.data))
      .catch(error => console.error('Error fetching pemeriksaan radiologi data:', error));

    // Ambil data decubitus dari server menggunakan Axios
    axios.get('{{base_url_gateway}}/rs-service/decubitusugd')
      .then(response => setDecubitusData(response.data))
      .catch(error => console.error('Error fetching decubitus data:', error));
  }, []);

  return (
    <div>
      <h2>RS Service</h2>
      <div>
        <h3>Asuransi</h3>
        <ul>
          {asuransiData.map(asuransi => (
            <li key={asuransi.id}>{asuransi.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Dokter</h3>
        <ul>
          {dokterData.map(dokter => (
            <li key={dokter.id}>{dokter.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Poliklinik</h3>
        <ul>
          {poliklinikData.map(poliklinik => (
            <li key={poliklinik.id}>{poliklinik.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Rawat Jalan</h3>
        <ul>
          {rawatJalanData.map(rawatJalan => (
            <li key={rawatJalan.id}>{rawatJalan.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Permintaan Radiologi</h3>
        <ul>
          {permintaanRadiologiData.map(permintaanRadiologi => (
            <li key={permintaanRadiologi.id}>{permintaanRadiologi.name}</li>
          ))}
        </ul>
        {/* Subfolder "pemeriksaan radiologi2" */}
        <div>
          <h4>Pemeriksaan Radiologi2</h4>
          <ul>
            {pemeriksaanRadiologiData.map(pemeriksaanRadiologi => (
              <li key={pemeriksaanRadiologi.id}>{pemeriksaanRadiologi.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Decubitus</h3>
        <ul>
          {decubitusData.map(decubitus => (
            <li key={decubitus.id}>{decubitus.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HospitalService;
