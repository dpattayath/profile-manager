import React from 'react';
import styled from 'styled-components';
import locationIcon from './icons/location.svg';
import starIcon from './icons/star.svg';
import instagramIcon from './icons/instagram.svg';
import rubbishBin from './icons/rubbish-bin.svg';
import {Card, CardBody} from 'reactstrap';
import {convertToThousands} from '../utils';

const StyledCard = styled(Card)`
    width: 260px;
    height: 386px;
    background: #FFFFFF;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.38);
    padding: 0px;
    margin-top: 24px;
    img {
        width: 260px;
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
        width: 90%;
    }

    span.delete {
        img.rubbish-bin {
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
    const {profile} = props;
    return (
        <StyledCard>
            <img src={"http://localhost:3000/images/" + profile.photo_identifier} alt={profile.first_name}/>
            <StyledCardBody>
                <Title>
                    <span className="name">{profile.first_name} {profile.last_name}</span>
                    <span className="delete">
                        <img className="rubbish-bin" src={rubbishBin} alt="delete"/>
                    </span>
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
        </StyledCard>
    );
}

export default ProfileCard;
