import { config } from '@/config/config';
import { Link } from '@inertiajs/react';
import { Center, Container, Image } from '@mantine/core';
import classes from './HeaderBanner.module.css';

interface HeaderBannerProps {
    stageWidth?: string | undefined;
}

export const HeaderBanner = ({ stageWidth }: HeaderBannerProps) => {
    return (
        <Container size="100%" maw={stageWidth} mt="0.75rem" mb="0.75rem">
            <Center>
                <Link href="/">
                    <Image
                        className={classes.logo}
                        src={config.logoUrl}
                        alt={config.siteName}
                    />
                </Link>
            </Center>
        </Container>
    );
};
