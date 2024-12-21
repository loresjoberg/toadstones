import { SiteLinkProps } from '@/types/toadstones';
import { Link } from '@inertiajs/react';
import { Box } from '@mantine/core';

export function NavLink({ text, href, color }: SiteLinkProps) {
    return (
        <Link href={href}>
            <Box
                ff="PT Sans Narrow"
                td="none"
                fw="bold"
                c="secondary.9"
                lh={2}
            >
                {text}
            </Box>
        </Link>
    );
}
