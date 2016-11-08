import AppDispatcher from './AppDispatcher';
import {ReduceStore} from 'flux/utils';


class BankBalanceStore extends ReduceStore {
	getInitialState() {
		return 0;
	}

	reduce(state, action){}
}

export default new BankBalanceStore(AppDispatcher);