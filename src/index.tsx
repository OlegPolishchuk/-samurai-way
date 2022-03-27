import React from 'react';
import './index.css';
import {RootStateType, state} from "./redux/state";
import {renderTree} from "./render";


renderTree(state);