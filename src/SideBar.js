import { Grid2, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
    const colours = useSelector((state) => state.product.colors)

    return (
        <Grid2 container direction="column" width={"90%"}>
            <Grid2 item>
                <Typography>
                    Filters
                </Typography>
            </Grid2>
            <Grid2 item>
                <Typography>
                    Colors
                </Typography>
                <Grid2 container direction={"row"} width={"90%"}>
                    <Grid2 item>{colours.map((item) => <div style={{
                        backgroundColor: item,
                        width: "20px", height: "20px", borderRadius: "6px", border:"1px black solid ", 
                    }}></div>)}</Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}

export default SideBar;