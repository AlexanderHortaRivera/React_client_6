import React from "react";
import {useSelector} from "react-redux";
import {Avatar, Card, CardContent, CardHeader, makeStyles, Typography} from "@material-ui/core";
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        width: 500,
    },
    d: {

        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,


    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: red[500],
    },
});


export default () => {

    const {email, id, data} = useSelector(state => state.auth)
    const classes = useStyles();

    return (

        <div className={classes.d}>
            <Card className={classes.root}>

                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {data.fio[0].toUpperCase()}
                        </Avatar>
                    }

                    title={email}
                    subheader={id}
                />

                <CardContent>
                    <Typography variant="h5" component="h2">
                        {data.fio}
                    </Typography>
                </CardContent>
            </Card>
        </div>

    )

}