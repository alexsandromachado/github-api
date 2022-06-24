import './styles.css';

/*type Props = {
    title: string;
    description: string;
} */

//const ResultCard = ( { title, description} : Props) => {

const ResultCard = () => {
  return (
    <div className="result-container">
      <div className="square">square</div>
      <div className="result-card-text">
        <h3>Informações</h3>
        <div className="result-input-container">
            <div className="result-input link">
                <h4>Perfil:</h4>
                <p>http://api.github.com/users/acenelio</p>
            </div>
            <div className="result-input">
                <h4>Seguidores:</h4>
                <p>4379</p>
            </div>
            <div className="result-input">
                <h4>Localidade:</h4>
                <p>Uberlândia</p>
            </div>
            <div className="result-input">
                <h4>Nome:</h4>
                <p>Nelio Alves</p>
            </div>         
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
