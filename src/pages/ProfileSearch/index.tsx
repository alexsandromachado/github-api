import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import { Profile } from 'types/profile';

type FormData = {
  usuario: string;
};

const ProfileSearch = () => {
  const [profile, setProfile] = useState<Profile>();
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const usuario = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [usuario]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.usuario}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
      });
  };

  return (
    <div className="profile-search-container">
      <div className="search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container input-container">
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
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
      {profile && <ResultCard profile={profile} />}
    </div>
  );
};

export default ProfileSearch;
