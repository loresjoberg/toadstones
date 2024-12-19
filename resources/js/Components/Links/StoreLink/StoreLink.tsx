import {Image} from "@mantine/core";
import { Link } from "@inertiajs/react";
import {config} from "@/config/config";

export function StoreLink() {
    return <Link href={config.adDestinationUrl} >
        <Image mb="xs" src={config.adImgUrl} alt="Visit the Bad Gods Store"/>
    </Link>;
}
