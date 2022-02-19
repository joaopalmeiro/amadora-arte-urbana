import range from 'just-range';
import remove from 'just-remove';
import isNull from 'lodash.isnull';
import { atom, selector } from 'recoil';

import { numStickers } from './constants';

// https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
// https://recoiljs.org/docs/guides/atom-effects/
// https://recoiljs.org/docs/api-reference/core/useResetRecoilState
// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
const localStorageEffect =
    (key) =>
    ({ setSelf, onSet }) => {
        const savedValue = localStorage.getItem(key);

        if (!isNull(savedValue)) {
            setSelf(JSON.parse(savedValue));
        }

        onSet((newValue, _, isReset) => {
            if (isReset) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(newValue));
            }
        });
    };

const allAvailable = range(1, numStickers + 1, 1);

// https://recoiljs.org/docs/basic-tutorial/atoms
export const collectionState = atom({
    default: [],
    effects: [localStorageEffect('collection_state')],
    key: 'collectionState'
});

// https://recoiljs.org/docs/introduction/getting-started#selector
export const availableState = selector({
    get: ({ get }) => {
        const collection = get(collectionState);

        return remove(allAvailable, collection);
    },
    key: 'availableState'
});

export const lastTimestampState = atom({
    default: null,
    effects: [localStorageEffect('last_timestamp_state')],
    key: 'lastTimestampState'
});
