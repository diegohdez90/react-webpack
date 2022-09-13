import React, { useState, createContext, useContext } from 'react';
import { AppContextValue } from '../interfaces/AppContextValue';

interface Props {
	children: React.ReactNode
}

const defaultAppValue: AppContextValue = {
	cart: {
		items: []
	}
};

export const AppContext = createContext(defaultAppValue);

export const AppSetContext = createContext<React.Dispatch<React.SetStateAction<AppContextValue>> | null>(null);

export const useSetState = () => {
	const setState = useContext(AppSetContext);
	if (!setState) {
		throw new Error('setter error');
	}
	return setState;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
	const [state, setState] = useState(defaultAppValue);
	return <AppContext.Provider value={state}>
		<AppSetContext.Provider value={setState}>
			{children}
		</AppSetContext.Provider>
	</AppContext.Provider>
}

export default AppProvider;
