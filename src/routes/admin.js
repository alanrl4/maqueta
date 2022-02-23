import {
    SearchRounded,
    QueueMusicRounded,
    StoreRounded,
    LogoutRounded,
    WarningRounded,
} from "@mui/icons-material";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from "@mui/material";
import { Outlet, Link, useResolvedPath, useMatch } from "react-router-dom";

function CustomLink({ to, text, icon }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    const styles = match
        ? {
              color: "secondary.onContainer",
              backgroundColor: "secondary.container",
          }
        : {};

    return (
        <ListItemButton
            sx={{
                height: "56px",
                borderRadius: "28px",
                marginLeft: "12px",
                marginRight: "12px",
                marginTop: "4px",
                marginBottom: "4px",
                fontWeight: "bold",
                "&:hover": {
                    color: "secondary.onContainer",
                    backgroundColor: "secondary.container",
                },
                ...styles,
            }}
            color="secondary"
            component={Link}
            to={to}
        >
            <ListItemIcon
                sx={[
                    {
                        color: match
                            ? "secondary.onContainer"
                            : "variant.onSurface",
                    },
                    { minWidth: 24 + 12 },
                ]}
            >
                {icon}
            </ListItemIcon>
            <ListItemText
                primary={text}
                primaryTypographyProps={{
                    sx: { fontWeight: "bold" },
                }}
            />
        </ListItemButton>
    );
}

function Admin() {
    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                sx={{
                    width: 360,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 360,
                        boxSizing: "border-box",
                    },
                    bgcolor: "background.default",
                }}
                PaperProps={{
                    sx: {
                        bgcolor: "background.default",
                        border: "none",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List sx={{ color: "variant.onSurface", fontWeight: "bold" }}>
                    <ListItem>
                        <ListItemText
                            primary="Administrar"
                            primaryTypographyProps={
                                {
                                    // sx: { color: "variant.onSurface" },
                                }
                            }
                        />
                    </ListItem>
                    {[
                        {
                            to: "",
                            text: "Buscar canciones",
                            icon: <SearchRounded />,
                        },
                        {
                            to: "./listas",
                            text: "Listas de reproduccion",
                            icon: <QueueMusicRounded />,
                        },
                        {
                            to: "./tiendas",
                            text: "Tiendas",
                            icon: <StoreRounded />,
                        },
                    ].map((v) => (
                        <CustomLink to={v.to} text={v.text} icon={v.icon} />
                    ))}
                    <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                    <CustomLink
                        to="/agente"
                        text="Ver agente"
                        icon={<WarningRounded />}
                    />
                    <CustomLink
                        to="/"
                        text="Cerrar sesión"
                        icon={<LogoutRounded />}
                    />
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: "background.default",
                    p: 3,
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export default Admin;
