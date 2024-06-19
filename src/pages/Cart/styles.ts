import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    Container: {
        width: "80vw",
        marginInline: "10vw",
        marginBottom: "3vh",
        marginTop: "20vh",
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row-reverse",
        },
    },
    LeftBlock: {
        [theme.breakpoints.up("sm")]: {
            width: "65%",
        },
    },
    ItemCard: {
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingInline: "4vh",
        paddingBlock: "2.5vh",
        border: "1px solid #e9e9e9",
        borderRadius: "3px",
        margin: "2vh",
    },
    Image: {
        height: "65px",
        border: "1px solid #e9e9e9",
        marginBlock: "1vh",
        marginRight: "2.2vh",
    },
    RightBlock: {
        [theme.breakpoints.up("sm")]: {
            width: "35%",
        },
    },
    CredentialsCard: {
        backgroundColor: "#fafafa",
        border: "1px solid #e9e9e9",
        borderRadius: "3px",
        margin: "2vh",
        height: "fit-content",
        paddingBlock: "3vh",
        paddingInline: "2.5vw",
    },
    Input: {
        paddingInline: "10px",
        marginTop: "1.5vh !important",
        backgroundColor: "#f0f0f0",
    },
    SearchIcon: {
        fontSize: "17px !important",
        color: "#808080",
        paddingRight: "1vh",
    },
    TotalPrice: {
        margin: "2vh",
        border: "1px solid #e9e9e9",
        borderRadius: "3px",
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingInline: "3vh",
        paddingBlock: "1.5vh",
    },
}));

export default useStyles;