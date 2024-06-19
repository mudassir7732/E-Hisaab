import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    Container: {
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
            width: "80vw",
        },
        [theme.breakpoints.up("sm")]: {
            width: "60vw",
        },
        marginTop: "15vh",
        margin: "auto",
    },
    Image: {
        width: "100%",
    },
    ThankYou: {
        fontWeight: "900",
        textAlign: "center",
        marginBlock: "2vh",
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px !important",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "28px !important",
        },
    },
    Text: {
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px !important",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "22px !important",
        },
    },
}));

export default useStyles;