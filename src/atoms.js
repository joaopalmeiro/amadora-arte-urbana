import { atom } from 'recoil';

// https://recoiljs.org/docs/basic-tutorial/atoms
export const collectionState = atom({
    default: [],
    key: 'collectionState'
});
