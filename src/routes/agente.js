import { LogoutRounded } from "@mui/icons-material";
import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Content = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));

function Agente() {
    return (
        <Content>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    px: 3,
                    height: '64px'
                }}
            >
                <Typography variant="h5">Tienda X</Typography>
                <Button
                    startIcon={<LogoutRounded />}
                    variant="outlined"
                    sx={{
                        textTransform: "none",
                        borderRadius: "24px",
                    }}
                    LinkComponent={Link}
                    to="/admin"
                >
                    Cerrar sesión
                </Button>
            </Box>
            <Box
                component="div"
                sx={{
                    width: "100vw",
                    display: "flex",
                }}
            >
                <iframe
                    src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                    height="380"
                    frameborder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                    style={{
                        width: "100%",
                        height: "calc(100vh - 64px)",
                    }}
                ></iframe>
            </Box>
        </Content>
    );
}

export default Agente;
