import { Button, Content, Text } from '@adobe/react-spectrum';
import ImageAdd from '@spectrum-icons/workflow/ImageAdd';
import { useSetRecoilState } from 'recoil';

import { collectionState } from './atoms';
import { defaultFontFamily } from './constants';
import StickerAlbum from './StickerAlbum';

function MainContent() {
    // https://recoiljs.org/docs/api-reference/core/useSetRecoilState
    const setCollection = useSetRecoilState(collectionState);

    // TODO
    const handleOnPress = () => setCollection((oldCollection) => [...oldCollection, 1]);

    return (
        <Content>
            {/* https://github.com/adobe/react-spectrum/blob/main/packages/%40adobe/spectrum-css-temp/components/commons/fonts.css */}
            {/* https://github.com/adobe/react-spectrum/issues/2788 */}
            {/* https://github.com/adobe/react-spectrum/pull/2057#discussion_r671584243 */}
            <Button
                variant="cta"
                onPress={handleOnPress}
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
