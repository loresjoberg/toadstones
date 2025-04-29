import { config } from '@/config/config';
import { Link } from '@inertiajs/react';
import { Anchor, Container, Flex, Image } from '@mantine/core';
import classes from './HeaderBanner.module.css';
import {StoreLink} from "@/components/Links/StoreLink/StoreLink";

interface HeaderBannerProps {
    stageWidth?: string | undefined;
}

export const HeaderBanner = ({ stageWidth }: HeaderBannerProps) => {
    return (
        <Container size="100%" maw={stageWidth} mt="0.75rem" mb="0.75rem">
            <Flex
                justify="space-between"
                align="center"
                direction="row"
                gap="md"
            >
                <div style={{height: '100px', width: '250px'}}>&nbsp;</div>
                <Anchor component={Link}  href="/">
                    <Image
                        fit="contain"
                        className={classes.logo}
                        src={config.logoUrl}
                        alt={config.siteName}
                    />
                </Anchor>
                <StoreLink/>
            </Flex>
        </Container>
    );
};
