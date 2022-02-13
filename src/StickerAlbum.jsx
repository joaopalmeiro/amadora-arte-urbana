import { Grid, repeat, minmax, Text } from '@adobe/react-spectrum';

import data from './data.json';

// https://react-layouts.com/tiles-by-width
// https://react-spectrum.adobe.com/react-spectrum/Grid.html#implicit-grids
function StickerAlbum() {
    return (
        // columns -> grid-template-columns
        <Grid gap="size-100" columns={repeat('auto-fill', minmax('size-4600', '1fr'))}>
            {data.map((d) => (
                <Text key={d.id}>{d.autoria}</Text>
            ))}
        </Grid>
    );
}

export default StickerAlbum;
