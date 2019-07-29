import React, {Fragment} from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';
import Dashbord from '../containers/Dashbord';

import CountTodo from '../containers/CountTodo';
import VisibleCountTodo from '../containers/VisibleCountTodo';

import Tform from "../components/Tform";
import Hello from '../components/Hello';

const AppRouter = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
        <Dashbord/>
        <CountTodo/>
        <VisibleCountTodo/>
        <Fragment>
            <Tform></Tform>
            <Hello name='sdsd'/>
        </Fragment>
    </div>
);

export default AppRouter;