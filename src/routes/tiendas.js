import {
    AddRounded,
    DeleteRounded,
    DoneRounded,
    EditRounded,
    MoreVertRounded,
    PlaylistAddRounded,
    SearchRounded,
} from "@mui/icons-material";
import {
    Dialog,
    Box,
    IconButton,
    InputBase,
    List,
    ListItemButton,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Fab,
    Badge,
    DialogTitle,
    DialogActions,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Menu,
    ListItemIcon,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { CustomTextField } from "./login";

const Content = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    alignItems: "center",
}));

function Item({ onClick, active }) {
    const [el, setEl] = useState(null);

    return (
        <ListItem
            disablePadding
            secondaryAction={
                <>
                    <IconButton onClick={(e) => setEl(e.currentTarget)}>
                        <MoreVertRounded />
                    </IconButton>
                    <Menu
                        open={Boolean(el)}
                        onClose={(e) => setEl(null)}
                        anchorEl={el}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        PaperProps={{
                            sx: {
                                bgcolor: "background.default",
                            },
                        }}
                    >
                        {[
                            {
                                icon: <EditRounded />,
                                text: "Editar",
                            },
                            {
                                icon: <DeleteRounded />,
                                text: "Eliminar",
                            },
                        ].map(({ icon, text }) => (
                            <MenuItem>
                                <ListItemIcon>
                                    <IconButton
                                        disableFocusRipple
                                        disableRipple
                                        disableTouchRipple
                                        color="primary"
                                    >
                                        {icon}
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            }
        >
            <ListItemButton
                sx={{
                    borderRadius: "22px",
                }}
                onClick={onClick}
            >
                <ListItemText
                    primary="Tienda"
                    secondary="Ubicacion o zona o algo asi"
                />
            </ListItemButton>
        </ListItem>
    );
}

function Tiendas() {
    const [selected, setSelected] = useState([]);
    const [modal, setModal] = useState(false);

    const onSelect = (i) => (e) => {
        if (selected.find((v) => v === i) !== undefined) {
            setSelected(selected.filter((v) => v !== i));
        } else {
            setSelected([...selected, i]);
        }
    };

    return (
        <>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    gap: 2,
                    backgroundColor: "white",
                    padding: 1,
                    borderRadius: "24px",
                    border: "solid 1px",
                    borderColor: "variant.surface",
                }}
            >
                <IconButton>
                    <SearchRounded sx={{ color: "variant.onSurface" }} />
                </IconButton>
                <InputBase
                    placeholder="Buscar"
                    sx={{
                        color: "variant.onSurface",
                    }}
                />
            </Box>
            <List>
                {new Array(5).fill(0).map((v, i) => (
                    <Item
                        onClick={onSelect(i)}
                        active={selected.find((v) => v === i) !== undefined}
                    />
                ))}
            </List>
            <Fab
                variant="extended"
                sx={{
                    borderRadius: "18px",
                    textTransform: "none",
                    right: "36px",
                    bottom: "36px",
                    position: "absolute",
                    height: "56px",
                    boxShadow: 3,
                    bgcolor: "primary.container",
                    color: "primary.onContainer",
                    fontWeight: "bold",
                    "&:hover": {
                        bgcolor: "#8cdda1",
                        color: "primary.onContainer",
                    },
                }}
                disableFocusRipple
                disableRipple
                disableTouchRipple
                onClick={(e) => setModal(true)}
            >
                <AddRounded sx={{ mr: "12px" }} />
                Nueva tienda
            </Fab>
            <Dialog
                open={modal}
                onClose={(e) => setModal(false)}
                PaperProps={{
                    sx: {
                        borderRadius: "24px",
                        padding: "24px",
                        bgcolor: "background.default",
                    },
                }}
            >
                <DialogTitle sx={{ p: 0, mb: "16px" }}>
                    Nueva tienda
                </DialogTitle>
                <Box component="div" sx={{ mb: "24px", mt: "12px" }}>
                    <CustomTextField label="Nombre" />
                </Box>
                <DialogActions>
                    <Button
                        variant="text"
                        color="primary"
                        onClick={(e) => setModal(false)}
                        sx={{
                            height: "48px",
                            textTransform: "none",
                            borderRadius: "28px",
                            px: 2,
                        }}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="text"
                        color="primary"
                        onClick={(e) => {
                            setModal(false);
                            setSelected([]);
                        }}
                        sx={{
                            height: "48px",
                            textTransform: "none",
                            borderRadius: "28px",
                            px: 2,
                        }}
                    >
                        Crear
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Tiendas;
