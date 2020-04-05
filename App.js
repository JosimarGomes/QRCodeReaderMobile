import React, { useState } from 'react';
import { Root } from "native-base";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import LoginHOC from './src/hoc/login';


const App = () => {

    const [loginName, setLoginName] = useState('');

    return (
        <Root>
            <LoginHOC
                login={(name) => setLoginName(name)}
                logout={() => setLoginName('')}
                loginName={loginName}
                isLogged={!!loginName != ''}
            />
        </Root>
    );
};


export default App;
