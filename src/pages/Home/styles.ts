import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme: any) => ({
    Container: {
        width: "100vw",
        marginBottom: "3vh",
        marginTop: "17.8vh",
    },
    BannerStyle: {
        width: "100%",
    },
    SearchBarContainer: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            marginBlock: "4vh",
            justifyContent: "space-evenly",
        },
        width: "90vw",
        margin: "auto",
    },
    SearchBarStyle: {
        [theme.breakpoints.down("sm")]: {
            width: "60vw !important",
            marginTop: "2vh",
            marginInline: "auto !important",
        },
        [theme.breakpoints.up("sm")]: {
            width: "22vw !important",
        },
        backgroundColor: "whitesmoke",
    },
    InputLabelStyle: {
        [theme.breakpoints.down("sm")]: {
            marginInline: "15vw",
            marginTop: "2vh",
        },
    },
    CardsContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "78vw",
        marginInline: "11vw",
    },
}));

export default useStyles;