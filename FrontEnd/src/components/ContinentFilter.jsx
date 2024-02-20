import PropTypes from 'prop-types';
import './ContinentFilter.css';

const ContinentFilter = ({ continentMappings, onContinentChange }) => {
    return (
        <div className='continent-filter'>
            <div className='continent'>
                <div className='continents'>
                    <span>Filtrar por continente</span>
                    <span>Limpiar</span>
                </div>
                {Object.keys(continentMappings).map(key => (
                    <div key={key} className='continent-item'>
                        <img
                            className='imgs'
                            src={continentMappings[key].image}
                            alt={continentMappings[key].name}
                            onClick={() => onContinentChange(key)}
                        />
                        <span className='continent-name'>{continentMappings[key].name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

ContinentFilter.propTypes = {
    continentMappings: PropTypes.object.isRequired,
    onContinentChange: PropTypes.func.isRequired
};

export default ContinentFilter;