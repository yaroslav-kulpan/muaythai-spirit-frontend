import React from 'react';
import { spiritService } from '../../services/spirit.service';

const Context = React.createContext(spiritService);

export { Context };
