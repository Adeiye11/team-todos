import React from "react";

import { Typography, Button, Container, Card, CardMedia, CardContent } from "@mui/material";


function TeamMemberDetail({ teamMember }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={`https://picsum.photos/seed/${teamMember.id}/500/300`}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {teamMember.name}
                </Typography>
                <Typography variant="body2" color="text.tertiary">
                    @{teamMember.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {teamMember.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {teamMember.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {teamMember.website}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TeamMemberDetail;