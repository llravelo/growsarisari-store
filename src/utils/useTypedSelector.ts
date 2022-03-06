import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../types/RootState';

// eslint-disable-next-line import/prefer-default-export
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
