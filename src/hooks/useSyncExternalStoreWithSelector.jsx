import {
  useRef,
  useMemo,
  useSyncExternalStore,
  useEffect,
  useDebugValue,
} from "react";

function is(x, y) {
  return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
}

var objectIs = typeof Object.is === "function" ? Object.is : is;

function useSyncExternalStoreWithSelector(
  subscribe,
  getSnapshot,
  getServerSnapshot,
  selector,
  isEqual
) {
  var instRef = useRef(null);
  var inst;

  if (instRef.current == null) {
    inst = {
      hasValue: false,
      value: null,
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(() => {
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;
    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      }

      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;
      if (objectIs(prevSnapshot, nextSnapshot)) {
        return prevSelection;
      }

      var nextSelection = selector(nextSnapshot);

      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    };

    var maybeGetServerSnapshot =
      getServerSnapshot == undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector =
      maybeGetServerSnapshot == null
        ? undefined
        : function () {
            return memoizedSelection(maybeGetServerSnapshot());
          };

    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [
    getSnapshot,
    getServerSnapshot,
    selector,
    isEqual,
    // inst.hasValue,
    // inst.value,
  ]);

  var getSelection = _useMemo[0];
  var getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);

  useEffect(() => {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);

  useDebugValue(value);
  return value;
}

export default useSyncExternalStoreWithSelector;
