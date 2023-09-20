import React from "react";
import { Avatar, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function TeamItem({ teamMember }) {
    return (<Link to={`/team/${teamMember.id}`} style={{ textDecoration: 'none' }}>
        <Stack direction={"row"} sx={{ minWidth: 0 }} p={2}>
            <Avatar src={`https://picsum.photos/seed/${teamMember.id}/500/300`} />
            <Container>
                <Stack direction={"row"}>
                    <Container>
                        <Typography variant={"body1"}>
                            {teamMember.name}
                        </Typography>
                        <Typography variant={"body2"}>
                            {teamMember.email}
                        </Typography>
                    </Container>
                </Stack>
            </Container>
        </Stack>
    </Link>
    );
}

export default TeamItem;