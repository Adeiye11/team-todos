import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Container, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
        <>
            <AppBar position="static">
                <Toolbar variant="regular">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Team Todos
                    </Typography>
                </Toolbar>
            </AppBar>
            <Stack direction={"row"}>
                <TeamList team={teamMembers} onclick={handleTeamMemberClick} />
                <Container xs={6} md={9} maxWidth="sm">
                    {selectedTeamMember ? (
                        <TeamMemberDetail teamMember={selectedTeamMember} />
                    ) : (
                        <Typography variant="h4" component="h1" gutterBottom>
                            Select a team member
                        </Typography>
                    )}
                </Container>
            </Stack>
        </>
    );
}

export default Root;