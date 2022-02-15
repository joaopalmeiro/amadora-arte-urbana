import isNull from 'lodash.isnull';
import { atom } from 'recoil';

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

// https://recoiljs.org/docs/basic-tutorial/atoms
export const collectionState = atom({
    default: [],
    effects: [localStorageEffect('collection_state')],
    key: 'collectionState'
});
