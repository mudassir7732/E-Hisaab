import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    Container: {
        backgroundColor: "#e7e7e7",
        width: "84vw",
        paddingInline: "8vw",
        paddingBlock: "1.5vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    Logo: {
        [theme.breakpoints.down("sm")]: {
            height: "6vh",
        },
        [theme.breakpoints.up("sm")]: {
            height: "8vh",
        },
        width: "fit-content",
    },
    ButtonsContainer: {
        minWidth: "50vw",
        maxWidth: "70vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    CartIcon: {
        [theme.breakpoints.down("sm")]: {
            height: "3vh !important",
        },
        [theme.breakpoints.up("sm")]: {
            height: "4vh",
        },
        width: "auto",
        color: "#606060",
    },
    ButtonStyle: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px !important",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "20px !important",
        },
    },
}));
export default useStyles;  