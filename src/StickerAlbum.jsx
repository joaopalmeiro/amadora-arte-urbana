import {
    ActionButton,
    Content,
    Dialog,
    DialogTrigger,
    Divider,
    Flex,
    Grid,
    Heading,
    Image,
    minmax,
    repeat,
    Text,
    View
} from '@adobe/react-spectrum';
import ViewDetail from '@spectrum-icons/workflow/ViewDetail';
import { useRecoilValue } from 'recoil';

import { collectionState } from './atoms';
import { defaultFontFamily, numStickers } from './constants';
import data from './data.json';

const gridColumnSize = 'size-4600';

// https://react-layouts.com/tiles-by-width
// https://react-spectrum.adobe.com/react-spectrum/Grid.html#implicit-grids
// https://react-spectrum.adobe.com/react-spectrum/styling.html#color-values
// https://ishadeed.com/article/learn-css-centering/
function StickerAlbum() {
    const collection = useRecoilValue(collectionState);

    // console.log('Collection:', collection);
    // console.log(data[0].pic_width / data[0].pic_height);
    // console.log(data[0].descricao_manual);

    // TODO
    return (
        // columns -> grid-template-columns
        <Grid gap="size-100" columns={repeat('auto-fill', minmax(gridColumnSize, '1fr'))}>
            {data
                .filter((d) => d.pic_width > 0 && d.pic_height > 0)
                .map((d) => (
                    <Flex direction="column" key={d.id} justifyContent="end">
                        {collection.includes(d.id) ? (
                            // https://react-spectrum.adobe.com/react-spectrum/Image.html
                            <Image src={d.pic_url} alt="" />
                        ) : (
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
                                <Text>
                                    #{d.id.toString().padStart(numStickers.toString().length, '0')}
                                </Text>
                            </View>
                        )}

                        <Flex direction="column">
                            <Text UNSAFE_style={{ fontFamily: defaultFontFamily }}>
                                {d.autoria}
                            </Text>
                            <Text UNSAFE_style={{ fontFamily: defaultFontFamily }}>{d.titulo}</Text>

                            {/* https://react-spectrum.adobe.com/react-spectrum/Dialog.html#examples */}
                            {/* https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html#dismissable */}
                            {/* https://spectrum.adobe.com/page/icons/ */}
                            {/* https://react-spectrum.adobe.com/react-spectrum/ActionButton.html */}
                            <DialogTrigger isDismissable type="modal">
                                <ActionButton aria-label="Read more about this work" isQuiet>
                                    <ViewDetail />
                                </ActionButton>
                                <Dialog>
                                    <Heading UNSAFE_style={{ fontFamily: defaultFontFamily }}>
                                        {d.autoria}: {d.titulo}
                                    </Heading>
                                    <Divider />
                                    <Content>
                                        <Text UNSAFE_style={{ fontFamily: defaultFontFamily }}>
                                            {d.descricao_manual}
                                        </Text>
                                    </Content>
                                </Dialog>
                            </DialogTrigger>
                        </Flex>
                    </Flex>
                ))}
        </Grid>
    );
}

export default StickerAlbum;
