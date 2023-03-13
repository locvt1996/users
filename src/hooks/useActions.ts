import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

type ActionCreators<T extends Record<string, any>> = {
  [P in keyof T]: (...args: Parameters<T[P]>) => ReturnType<T[P]>;
};

type ConvertWithPrefix<T> = Record<`${Extract<keyof T, string>}Action`, T[keyof T]>;

const useActions = <Actions extends Record<keyof Actions, any>>(actions: Actions) => {
  const dispatch = useDispatch();

  type ReturnActionCreators = ActionCreators<ConvertWithPrefix<Actions>>;

  const actionCreators: ReturnActionCreators = useMemo(() => {
    const actionsCombine: ReturnActionCreators = {} as ReturnActionCreators;

    for (const property in actions) {
      actionsCombine[`${property}Action`] = actions[property];
    }

    return bindActionCreators(actionsCombine, dispatch);
  }, [actions, dispatch]);

  return actionCreators;
};

export default useActions;
