import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFromSnapShot } from "../firestore/fireStoreService";
import { errorAction, finishAction, startAction } from "../store/actions/async";

const useFirestoreCollection = ({query, data, deps}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startAction());
        const unsubscribe = query().onSnapshot(
            snapshot => {
                const docs = snapshot.docs.map(docs => dataFromSnapShot(docs));
                data(docs);
                dispatch(finishAction());
            },
            error => dispatch(errorAction(error))
        );
        return () => {
            unsubscribe();
        }
    }, deps)    // eslint-disable-line react-hooks/exhaustive-deps
}

export default useFirestoreCollection;