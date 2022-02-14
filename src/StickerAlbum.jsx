import { Flex, Grid, minmax, repeat, Text, View } from '@adobe/react-spectrum';

import data from './data.json';

const gridColumnSize = 'size-4600';

// https://react-layouts.com/tiles-by-width
// https://react-spectrum.adobe.com/react-spectrum/Grid.html#implicit-grids
// https://react-spectrum.adobe.com/react-spectrum/styling.html#color-values
// https://ishadeed.com/article/learn-css-centering/
function StickerAlbum() {
    const numStickers = data.length;

    return (
        // columns -> grid-template-columns
        <Grid gap="size-100" columns={repeat('auto-fill', minmax(gridColumnSize, '1fr'))}>
            {data.map((d) => (
                <Flex direction="column" key={d.id}>
                    <View
                        // width={d.pic_width}
                        // height={d.pic_height}
                        minWidth={gridColumnSize}
                        borderWidth="thin"
                        borderColor="gray-400"
                        backgroundColor="gray-200"
                        UNSAFE_style={{
                            alignItems: 'center',
                            aspectRatio: `${d.pic_width / d.pic_height}`,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Text>#{d.id.toString().padStart(numStickers.toString().length, '0')}</Text>
                    </View>
                    <Text>{d.autoria}</Text>
                    <Text>{d.titulo}</Text>
                </Flex>
            ))}
        </Grid>
    );
}

export default StickerAlbum;
