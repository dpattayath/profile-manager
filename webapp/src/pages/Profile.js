import React from 'react';
import ProfileCard from '../components/ProfileCard';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import MockProfileService from '../services/MockProfileService';

const Heading = styled.div`
    text-align: center;
    font-family: Brandon Grotesque;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
`;

const Profile = () => {
    const profiles = MockProfileService.all([]);
    return (
        <Container>
            <Heading>
                Profile Manager
            </Heading>
            <Row lg="4" sm="1" md="2">
                {
                    profiles.map(function(profile, index) {
                        return (
                            <Col key={index}>
                                <ProfileCard profile={profile}/>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    )
}

export default Profile;
