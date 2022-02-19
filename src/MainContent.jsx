import { Button, Content, Text } from '@adobe/react-spectrum';
import ImageAdd from '@spectrum-icons/workflow/ImageAdd';
import { addDays, isSameDay, startOfDay } from 'date-fns';
import sampleSize from 'lodash.samplesize';
import Countdown from 'react-countdown';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { availableState, collectionState, lastTimestampState } from './atoms';
import { packetSize } from './constants';
import { ff } from './constants.module.css';
import classes from './MainContent.module.css';
import StickerAlbum from './StickerAlbum';

function MainContent() {
    // https://recoiljs.org/docs/api-reference/core/useSetRecoilState
    const setCollection = useSetRecoilState(collectionState);
    const available = useRecoilValue(availableState);
    const [lastTimestamp, setLastTimestamp] = useRecoilState(lastTimestampState);

    // console.log('Available:', available);
    // console.log(lastTimestamp, Date.now(), startOfDay(addDays(Date.now(), 1)));
    // console.log(
    //     isSameDay(lastTimestamp, Date.now()),
    //     isSameDay(lastTimestamp, epochMs),
    //     isSameDay(lastTimestamp, new Date('February 20, 2022 00:00:00').valueOf())
    // );
    // console.log(ff);

    // https://lodash.com/docs/4.17.15#sampleSize
    const handleOnPress = () => {
        setCollection((oldCollection) => [...oldCollection, ...sampleSize(available, packetSize)]);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
        // Number of milliseconds
        setLastTimestamp(Date.now());
    };

    const isSameDayCurrently = isSameDay(lastTimestamp, Date.now());

    return (
        <Content>
            {/* https://github.com/adobe/react-spectrum/blob/main/packages/%40adobe/spectrum-css-temp/components/commons/fonts.css */}
            {/* https://github.com/adobe/react-spectrum/issues/2788 */}
            {/* https://github.com/adobe/react-spectrum/pull/2057#discussion_r671584243 */}
            <Button
                variant="cta"
                onPress={handleOnPress}
                // https://date-fns.org/v2.28.0/docs/isSameDay
                isDisabled={available.length === 0 || isSameDayCurrently}
                UNSAFE_style={{ fontFamily: ff }}
            >
                <ImageAdd />
                <Text>Abrir</Text>
            </Button>

            {/* https://github.com/cwackerfuss/react-wordle/blob/main/src/components/modals/StatsModal.tsx#L62 */}
            {/* https://github.com/ndresx/react-countdown */}
            {/* https://github.com/ndresx/react-countdown/issues/3 */}
            {/* https://github.com/ndresx/react-countdown/blob/master/src/Countdown.tsx#L342 */}
            {/* https://github.com/ndresx/react-countdown#oncomplete */}
            {/* UI component */}

            {isSameDayCurrently && (
                <Countdown
                    date={startOfDay(addDays(Date.now(), 1))}
                    daysInHours={true}
                    className={classes.countdown}
                />
            )}

            <StickerAlbum />
        </Content>
    );
}

export default MainContent;
