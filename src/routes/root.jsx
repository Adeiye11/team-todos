import React, { useState, useEffect } from "react";
import { Typography, Card, Stack, Container } from "@mui/material";
import TeamMemberDetail from "../components/TeamMemberDetail";
import TeamList from "../components/TeamList";

function Root() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setTeamMembers(data));
    }
        , []);


    const handleTeamMemberClick = (teamMember) => {
        setSelectedTeamMember(teamMember);
    };

    return (
        <Card sx={{ minWidth: 0, margin: 15 }} variant={"elevation"}>
            <Stack direction={"row"}>
                <TeamList team={teamMembers} onclick={handleTeamMemberClick} />
                {selectedTeamMember ? (
                    <TeamMemberDetail teamMember={selectedTeamMember} />
                ) : (
                    <Container sx={{ padding: 10 }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Select a team member
                        </Typography>
                    </Container>
                )}
            </Stack>
        </Card >
    );
}

export default Root;