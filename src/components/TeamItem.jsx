import React from "react";
import { Avatar, Button, Container, Stack, Typography } from "@mui/material";

function TeamItem({ teamMember, onclick }) {
    return (
        <>
            <Stack direction={"row"} onClick={() => onclick(teamMember)} sx={{ minWidth: 0 }} p={2}>
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
                        <Button variant={'outlined'} size={"small"} >
                            Todos
                        </Button>
                    </Stack>
                </Container>
            </Stack>
        </>
    );
}

export default TeamItem;