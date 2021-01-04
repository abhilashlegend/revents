import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFromSnapShot } from "../firestore/fireStoreService";
import { errorAction, finishAction, startAction } from "../store/actions/async";

const useFirestoreDoc = ({query, data, deps, shouldExecute = true}) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!shouldExecute) return;
        dispatch(startAction());

        const unsubscribe = query().onSnapshot(
            snapshot => {
               
                if(!snapshot.exists) {
                    dispatch(errorAction({message: 'Could not find event'}));
                    return;
                }
                data(dataFromSnapShot(snapshot));
                dispatch(finishAction());
            },
            error => dispatch(errorAction(error))
        );

        return () => {
            unsubscribe()
        }
    }, deps)  // eslint-disable-line react-hooks/exhaustive-deps
}

export default useFirestoreDoc;