import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Input } from 'reactstrap';
import ProfileCard from '../components/ProfileCard';
import MockProfileService from '../services/MockProfileService';

const Heading = styled.div`
    text-align: center;
    font-family: Brandon Grotesque;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
`;

const StyledInput = styled(Input)`
    border: 1px solid rgba(13, 25, 98, 0.21);
    border-radius: 2px;
`;

const Profile = () => {
    const [locationFilter, setLocationFilter] = useState(0);
    const [categoryFilter, setCategoryFilter] = useState(0);
    const [profiles, setProfiles] = useState([]);

    const categories = MockProfileService.getCategories();
    const locations = MockProfileService.getLocations();

    const fetchProfiles = () => {
        setProfiles(MockProfileService.getProfiles({
            'location_id': locationFilter,
            'category_id': categoryFilter,
        }));
    }

    const filterByLocation = (e) => {
        setLocationFilter(parseInt(e.target.value));
    }

    const filterByCategory = (e) => {
        setCategoryFilter(parseInt(e.target.value));
    }

    useEffect(() => {
        fetchProfiles();
    // eslint-disable-next-line
    }, [locationFilter, categoryFilter]);

    return (
        <Container>

            <Heading>Profiles</Heading>

            <Row lg="2" sm="1" md="1" xs="1">
                <Col>
                    <StyledInput type="select" name="locationSelect" id="locationSelect" onChange={filterByLocation}>
                    {
                        Object.keys(locations).map((key) => {
                            return (
                                <option key={key} value={key}>{locations[key]}</option>
                            )
                        })
                    }
                    </StyledInput>
                </Col>
                <Col>
                    <StyledInput type="select" name="categorySelect" id="categorySelect" onChange={filterByCategory}>
                    {
                        Object.keys(categories).map((key) => {
                            return (
                                <option key={key} value={key}>{categories[key]}</option>
                            )
                        })
                    }
                    </StyledInput>
                </Col>
            </Row>

            <Row lg="4" sm="1" md="2">
                {
                    profiles.map(function(profile, index) {
                        profile.location = locations[profile.location_id];
                        profile.category = categories[profile.category_id];
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
