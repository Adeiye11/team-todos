import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Grid, Container, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TeamItem from "../components/TeamItem";
import TeamMemberDetail from "../components/TeamMemberDetail";

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
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Stack spacing={2}>
                        {teamMembers.map((teamMember) => (
                            <TeamItem key={teamMember.id} teamMember={teamMember} onclick={handleTeamMemberClick} />
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={6} md={9}>
                    <Container maxWidth="sm">
                        {selectedTeamMember ? (
                            <TeamMemberDetail teamMember={selectedTeamMember} />
                        ) : (
                            <Typography variant="h4" component="h1" gutterBottom>
                                Select a team member
                            </Typography>
                        )}
                    </Container>
                </Grid>
            </Grid>
        </>
    );
}

export default Root;