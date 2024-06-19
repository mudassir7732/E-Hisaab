import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    Container: {
        width: "fit-content",
        maxWidth: "70vw",
        margin: "auto",
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
            marginTop: "2vh",
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: "10vh",
        },
    },
    ImageBlock: {
        [theme.breakpoints.down("sm")]: {
            width: "55vw",
        },
        [theme.breakpoints.up("sm")]: {
            width: "40vw !important",
        },
    },
    DetailsBlock: {
        width: "100%",
        backgroundColor: 'whitesmoke',
    },
    Logo: {
        height: "6vh",
        width: "6vh",
        marginRight: "3vh",
    },
    StoreName: {
        fontSize: "15px !important",
        fontWeight: "600 !important",
    },
    StoreAddress: {
        fontSize: "13px !important",
    },
}));

export default useStyles;