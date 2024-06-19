import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    Container: {
        width: "80vw",
        marginTop: '17.8vh',
        marginInline: "10vw",
    },
    TopBlock: {
        display: "flex",
        alignItems: "center",
        minHeight: "40vh",
    },
    Image: {
        [theme.breakpoints.down("sm")]: {
            height: "12vh",
            marginInline: "5vw",
        },
        [theme.breakpoints.up("sm")]: {
            height: "20vh",
            marginInline: "8vw",
        },
    },
    Title: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px !important",
            paddingBottom: "2vh",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "26px !important",
            paddingBottom: "3vh",
        },
        fontWeight: "900 !important",
    },
    Text: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px !important",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "19px !important",
        },
    },
    SearchBarContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    SearchBarStyle: {
        [theme.breakpoints.down("sm")]: {
            width: "32vw !important",
        },
        [theme.breakpoints.up("sm")]: {
            width: "22vw !important",
        },
        backgroundColor: "whitesmoke",
    },
    CardsContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
    },
}));

export default useStyles;