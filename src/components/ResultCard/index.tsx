import { Profile } from 'types/profile';
import './styles.css';

type Props = {
  profile: Profile;
};

const ResultCard = ({ profile }: Props) => {
  return (
    <div className="result-container">
      <div className="img-container">
        <img src={profile.avatar_url} alt={profile.name} />
      </div>
      <div className="result-card-text">
        <h3>Informações</h3>
        <div className="result-input-container">
          <div className="result-input link">
            <h4>Perfil:</h4>
            <p>{profile.url}</p>
          </div>
          <div className="result-input">
            <h4>Seguidores:</h4>
            <p>{profile.followers}</p>
          </div>
          <div className="result-input">
            <h4>Localidade:</h4>
            <p>{profile.location}</p>
          </div>
          <div className="result-input">
            <h4>Nome:</h4>
            <p>{profile.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
