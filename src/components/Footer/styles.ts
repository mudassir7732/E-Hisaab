import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    Container: {
        backgroundColor: "#e7e7e7",
        paddingBlock: "2vh",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1vw",
            paddingRight: "1vw",
        },
        [theme.breakpoints.up("sm")]: {
            paddingLeft: "3vw",
            paddingRight: "8vw",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    Image: {
        [theme.breakpoints.down("sm")]: {
            height: "3.5vh",
            paddingRight: "1vw",
        },
        [theme.breakpoints.up("sm")]: {
            height: "4.5vh",
            paddingInline: "2vw",
        },
        color: "#606060",
    },
}));

export default useStyles;