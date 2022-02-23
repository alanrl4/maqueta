import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import backgroundImage from "../img/bg.jfif";
import { Link } from "react-router-dom";

const FullContent = styled("div")({
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    overflow: "hidden",
    position: "relative",
});

const Container = styled("div")(({ theme }) => ({
    width: "30vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(4),
    background: theme.palette.background.default,
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
}));

const InputContinaer = styled("div")(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(1),
    flexDirection: "column",
}));

const InputLabel = styled("label")(({ theme }) => ({
    color: theme.palette.background.onBackground,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    ...theme.typography.body1,
}));

const NormalInput = styled("input")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderRadius: 12,
    border: "none",
    borderBottom: "solid 3px",
    borderBottomColor: theme.palette.background.onBackground,
    padding: theme.spacing(2),
    outline: "none",
    ...theme.typography.body1,
    "&::placeholder": {
        ...theme.typography.body1,
    },
}));

function CustomTextField({ label }) {
    return (
        <InputContinaer>
            <InputLabel>{label}</InputLabel>
            <NormalInput type="text" placeholder={label} />
        </InputContinaer>
    );
}

function Login() {
    return (
        <FullContent>
            <Container>
                <Typography color="primary" variant="h3">
                    Inicia sesión
                </Typography>
                <CustomTextField label="Usuario" />
                <CustomTextField label="Contraseña" />
                <Button
                    disableElevation
                    color="primary"
                    variant="contained"
                    type="button"
                    sx={{
                        borderRadius: 24,
                        textTransform: "none",
                    }}
                    LinkComponent={Link}
                    to={"/admin"}
                >
                    Acceder
                </Button>
            </Container>
            <img
                src={backgroundImage}
                style={{
                    position: "absolute",
                    width: "100vw",
                    zIndex: -1,
                    left: "20vw",
                }}
            />
        </FullContent>
    );
}

export { CustomTextField };

export default Login;
