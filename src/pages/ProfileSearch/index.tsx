import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  cep: string;
};

type Address = {
  logradouro: string;
  localidade: string;
};

const ProfileSearch = () => {
  const [address, setAddress] = useState<Address>();
  const [formData, setFormData] = useState<FormData>({
    cep: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://viacep.com.br/ws/${formData.cep}/json/`)
      .then((response) => {
        setAddress(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
      });
  };

  return (
    <div className="profile-search-container">
      <div className=" search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container input-container">
            <input
              type="text"
              name="useario"
              value={formData.cep}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <ResultCard />
    </div>
  );
};

export default ProfileSearch;
