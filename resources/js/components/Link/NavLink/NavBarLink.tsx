import { SiteLinkProps } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Anchor, Box } from '@mantine/core';
import classes from './NavLinkClasses.module.css';

export function NavBarLink({ text, href }: SiteLinkProps) {
    return (
        <Anchor component={Link} href={href} c="secondary.9">
            <Box
                className={classes.navLink}
                ff="PT Sans Narrow"
                td="none"
                fw="bold"
                lh={2}
            >
                {text}
            </Box>
        </Anchor>
    );
}
