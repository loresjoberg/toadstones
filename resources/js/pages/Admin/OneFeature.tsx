import { Feature } from '@/types/toadstones';
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';

interface OneFeatureProps {
    feature: Feature;
}

export default function OneFeature({ feature }: OneFeatureProps) {

    return <div>
        <pre>
        {JSON.stringify(feature, null, 2)}
        </pre>

    </div>
}
