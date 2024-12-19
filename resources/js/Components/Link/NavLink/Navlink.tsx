import {Box} from "@mantine/core";
import React from "react";
import { Link } from "@inertiajs/react";
import classes from "./Navlink.module.css";
import { SiteLinkProps } from "@/types/toadstones";


export function NavLink({text, href, color}: SiteLinkProps) {
    return <Link href={href}>
        <Box className={classes.navLink} ff="PT Sans Narrow" td="none" fw="bold" c={color} lh={2}>
             {text}
        </Box>
    </Link>
}
