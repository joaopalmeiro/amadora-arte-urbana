import { Button, Content, Text } from '@adobe/react-spectrum';
import ImageAdd from '@spectrum-icons/workflow/ImageAdd';
import sampleSize from 'lodash.samplesize';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { availableState, collectionState, lastTimestampState } from './atoms';
import { defaultFontFamily, msInDay, packetSize } from './constants';
import StickerAlbum from './StickerAlbum';

const isSameDay = (referenceTimestamp) => Math.floor((Date.now() - referenceTimestamp) / msInDay);

function MainContent() {
    // https://recoiljs.org/docs/api-reference/core/useSetRecoilState
    const setCollection = useSetRecoilState(collectionState);
    const available = useRecoilValue(availableState);
    // console.log('Available:', available);
    const [lastTimestamp, setLastTimestamp] = useRecoilState(lastTimestampState);
    // console.log(
    //     lastTimestamp,
    //     isSameDay(lastTimestamp),
    //     isSameDay(new Date('February 20, 2022 00:00:00').valueOf()),
    //     isSameDay(new Date('February 21, 2022 00:00:00').valueOf()),
    //     isSameDay(new Date('February 23, 2022 00:00:00').valueOf()),
    //     isSameDay(new Date('March 10, 2022 00:00:00').valueOf()),
    //     isSameDay(new Date('January 1, 2022 00:00:00').valueOf())
    // );

    // https://lodash.com/docs/4.17.15#sampleSize
    const handleOnPress = () => {
        setCollection((oldCollection) => [...oldCollection, ...sampleSize(available, packetSize)]);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
        // Number of milliseconds
        setLastTimestamp(Date.now());
    };

    return (
        <Content>
            {/* https://github.com/adobe/react-spectrum/blob/main/packages/%40adobe/spectrum-css-temp/components/commons/fonts.css */}
            {/* https://github.com/adobe/react-spectrum/issues/2788 */}
            {/* https://github.com/adobe/react-spectrum/pull/2057#discussion_r671584243 */}
            <Button
                variant="cta"
                onPress={handleOnPress}
                isDisabled={available.length === 0 || isSameDay(lastTimestamp) === 0}
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
