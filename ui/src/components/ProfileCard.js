import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import locationIcon from './icons/location.svg';
import starIcon from './icons/star.svg';
import instagramIcon from './icons/instagram.svg';
import rubbishBin from './icons/rubbish-bin.svg';
import {Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {convertToThousands} from '../lib/utils';
import {HOST} from '../lib/constants';
import AuthContext from '../contexts/AuthContext';

const StyledCard = styled(Card)`
    width: 260px;
    height: 386px;
    background: #FFFFFF;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.38);
    padding: 0px;
    margin-top: 24px;
    img {
        width: 258px;
        height: 248px;
    }
    color: #424242;
`;

const StyledCardBody = styled(CardBody)`
    padding: 12px 16px;
`;

const Title = styled.div`
    margin-bottom: 6px;
    font-family: Brandon Grotesque;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #0D1962;
    display: flex;
    flex-direction: row;

    span.name {
        width: 80%;
    }

    span.actions {
        img {
            width: 22px;
            height: 22px;
        }
    }
`;

const SubTitle = styled.div`
    margin-bottom: 4px;

    span {
        font-family: Brandon Grotesque;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        margin-left: 2px;

        &.reviews {
            color: #ccc;
        }
    }

    img.location {
        width: 20px;
        height: 20px;
    }

    img.star {
        width: 20px;
        height: 20px;
    }

    img.instagram {
        width: 20px;
        height: 16px;
    }
`;

const ProfileCard = (props) => {

    const {profile, onDeleteAction, onEditAction} = props;

    const { authenticated } = useContext(AuthContext);

    const [toDelete, setToDelete] = useState({
        'id': 0,
        'show_confirm': false
    });

    /**
    handler for edit button click
     */
    const onEditClick = (id) => {
        onEditAction(id);
    }

    /**
    handler for delete button click
     */
    const onDeleteClick = (id) => setToDelete({'id': id, 'show_confirm': true});

    /**
    handler for delete form cancel
     */
    const onDeleteCancel = () => setToDelete({'id': 0, show_confirm: false});

    /**
    action upon confirming the delete
     */
    const onDeleteConfirm = () => {
        if (toDelete.id > 0) {
            onDeleteAction(toDelete.id);
        }
        setToDelete({
            'id': 0,
            'show_confirm': false
        });
    }

    return (

        <StyledCard>

            <img src={`${HOST}/images/` + profile.photo_identifier} alt={profile.first_name}/>

            <StyledCardBody>

                <Title>
                    <span className="name">{profile.first_name} {profile.last_name}</span>
                    {authenticated && (
                        <span className="actions">
                            <img src={rubbishBin}
                                alt="edit"
                                onClick={() => onEditClick(profile.id)}/>
                            <img src={rubbishBin}
                                alt="delete"
                                onClick={() => onDeleteClick(profile.id)}/>
                        </span>
                    )}
                </Title>

                <SubTitle>
                    <img className="location" src={locationIcon} alt="location"/>
                    <span>{profile.location}</span>
                </SubTitle>

                <SubTitle>
                    <img className="star" src={starIcon} alt="ratings"/>
                    <span className="rating">{profile.rating}</span>
                    <span className="reviews">({profile.reviews})</span>
                </SubTitle>

                <SubTitle>
                    <img className="instagram" src={instagramIcon} alt="followers"/>
                    <span>{convertToThousands(profile.followers)} Followers</span>
                </SubTitle>

            </StyledCardBody>

            {/* Modal for delete profile */}
            <Modal isOpen={toDelete.show_confirm}>

                <ModalHeader toggle={onDeleteCancel}>Confirm Delete</ModalHeader>

                <ModalBody>

                    You are about to delete a profile, please confirm?

                </ModalBody>

                <ModalFooter>

                    <Button color="primary" onClick={onDeleteConfirm}>Confirm</Button>{' '}

                    <Button color="secondary" onClick={onDeleteCancel}>Cancel</Button>

                </ModalFooter>

            </Modal>
            {/* end */}

        </StyledCard>
    );
}

export default ProfileCard;
