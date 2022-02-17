import { Button, Content, Text } from '@adobe/react-spectrum';
import ImageAdd from '@spectrum-icons/workflow/ImageAdd';
import sampleSize from 'lodash.samplesize';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { availableState, collectionState } from './atoms';
import { defaultFontFamily, packetSize } from './constants';
import StickerAlbum from './StickerAlbum';

function MainContent() {
    // https://recoiljs.org/docs/api-reference/core/useSetRecoilState
    const setCollection = useSetRecoilState(collectionState);
    const available = useRecoilValue(availableState);
    // console.log('Available:', available);

    // https://lodash.com/docs/4.17.15#sampleSize
    const handleOnPress = () =>
        setCollection((oldCollection) => [...oldCollection, ...sampleSize(available, packetSize)]);

    return (
        <Content>
            {/* https://github.com/adobe/react-spectrum/blob/main/packages/%40adobe/spectrum-css-temp/components/commons/fonts.css */}
            {/* https://github.com/adobe/react-spectrum/issues/2788 */}
            {/* https://github.com/adobe/react-spectrum/pull/2057#discussion_r671584243 */}
            <Button
                variant="cta"
                onPress={handleOnPress}
                isDisabled={available.length === 0}
                UNSAFE_style={{ fontFamily: defaultFontFamily }}
            >
                <ImageAdd />
                <Text>Abrir</Text>
            </Button>

            <StickerAlbum />
        </Content>
    );
}

export default MainContent;
