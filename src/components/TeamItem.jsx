import React from "react";
import { Avatar, Button, Container, Stack, Typography, Divider } from "@mui/material";

function TeamItem({ teamMember, onclick }) {
    return (
        <>
            <Stack direction={"row"} onClick={() => onclick(teamMember)}>
                <Container>
                    <Avatar src={`https://picsum.photos/seed/${teamMember.id}/500/300`} />
                </Container>
                <Stack direction={"row"} flexWrap={"wrap"} gap={0.5} minWidth={0}>
                    <Container>
                        <Typography variant={"h6"}>
                            {teamMember.name}
                        </Typography>
                        <Typography variant={"body2"}>
                            {teamMember.email}
                        </Typography>
                    </Container>
                    <Button variant={'outlined'}>
                        View Todos
                    </Button>
                </Stack>
            </Stack>
            <Divider />
        </>
    );
}

export default TeamItem;