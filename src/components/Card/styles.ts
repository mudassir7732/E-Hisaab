import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '30vw',
        },
        [theme.breakpoints.up('sm')]: {
            width: '22vw',
        },
        backgroundColor: 'whitesmoke',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        marginBlock: '2vh',
    },
    CarouselStyle: {
        [theme.breakpoints.down('sm')]: {
            height: '18vh',
        },
        [theme.breakpoints.up('sm')]: {
            height: '30vh',
        },
    },
    Thumbnail: {
        [theme.breakpoints.down('sm')]: {
            maxHeight: '25vw',
            width: '30vw',
        },
        [theme.breakpoints.up('sm')]: {
            maxHeight: '20vw',
            width: '22vw',
        },
        borderBottom: '0.5px solid #e0e0e0',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
    },
    Title: {
        fontWeight: '600 !important',
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px !important',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px !important',
        },
    },
    desc: {
        paddingInline: '1.1vw',
        paddingTop: '0.8vh',
        [theme.breakpoints.down('sm')]: {
            fontSize: '9.8px !important',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '15px !important',
        },
    },
    ButtonStyle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px !important',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px !important',
        },
    },
}));

export default useStyles;