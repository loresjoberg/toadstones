import { config } from '@/config/config';
import { Link } from '@inertiajs/react';
import { Anchor, Image } from '@mantine/core';

export  function StoreLink() {
    return (
        <Anchor component={Link}  href={config.adDestinationUrl}>
            <Image
                mb="xs"
                src={config.adImgUrl}
                alt="Visit the Bad Gods Store"
            />
        </Anchor>
    );
}
