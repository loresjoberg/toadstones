import { config } from '@/config/config';
import { Link } from '@inertiajs/react';
import { Anchor, Image } from '@mantine/core';

export  function StoreLink() {
    return (
        <Anchor component={Link}  href={config.adDestinationUrl}>
            <Image
                fit="contain"
                mb="xs"
                h="100"
                w="250"
                src={config.adImgUrl}
                alt="Visit the Bad Gods Store"
            />
        </Anchor>
    );
}
