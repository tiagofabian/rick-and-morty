import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/Character.scss';
import { ReactComponent as SVGStar } from '../assets/static/icons/star.svg';
import CharacterDetail from './CharacterDetail';
import Modal from './Modal';
import useModal from '../custom-hooks/useModal';


const Character = (props) => {
    const { modal, handleCloseModal, handleOpenModal } = useModal();
    const [favorite, setFavorite] = useState(false);

    // props
    const { data, favoriteCharacters } = props;
    const { id, name, image, status, species, gender } = data;

    const handleSetFavorite = () => {
        props.setFavorite({ data });
        setFavorite(true);
    };

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
        setFavorite(false);
    };

    const isFavorite = () => {
        const result = favoriteCharacters.filter(
          (favoriteCharacter) => favoriteCharacter.data.id === id
        );
        if (result.length) {
          setFavorite(true);
        }
    };

    useEffect(() => {
        isFavorite();
    }, []);

    return(
        <div className="character">
            <img className="character__img" src={image} alt="Character" />
            <div className="character__details">
                <h2 className="character__details-name">
                    {name}
                </h2>
                {
                    favorite ?
                        <SVGStar onClick={() => handleDeleteFavorite(id)} className="character__details-star favorite"/> :
                        <SVGStar onClick={handleSetFavorite} className="character__details-star noFavorite"/>
                }
                <p
                    className="character__details__item"
                >
                    <span className="character__details__item-type">Status:</span>
                    {' '}
                    {status}
                </p>
                <p className="character__details__item">
                    <span className="character__details__item-type">Species:</span>
                    {' '}
                    {species}
                </p>
                <p className="character__details__item">
                    <span className="character__details__item-type">Gender:</span>
                    {' '}
                    {gender}
                </p>
                <p onClick={handleOpenModal} className="character__details__item-more">
                    More details...
                </p>
            </div>
            <Modal isOpen={modal} onClose={handleCloseModal}>
                <CharacterDetail data={data}/>
            </Modal>
        </div>
    );
}

// prototype: components documentation
Character.propTypes = {
    data: propTypes.object,
}

// Native functions redux (HOC)
const mapStateToProps = (state) => {
    return{
        favoriteCharacters: state.favoriteCharacters
    };
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
