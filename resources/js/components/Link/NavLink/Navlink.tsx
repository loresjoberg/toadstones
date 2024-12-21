import { SiteLinkProps } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Anchor, Box } from '@mantine/core';
import classes from './NavLinkClasses.module.css';

export function NavLink({ text, href, color }: SiteLinkProps) {
    return (
        <Anchor component={Link} href={href}>
            <Box
                className={classes.navLink}
                ff="PT Sans Narrow"
                td="none"
                fw="bold"
                c="secondary.9"
                lh={2}
            >
                {text}
            </Box>
        </Anchor>
    );
}
