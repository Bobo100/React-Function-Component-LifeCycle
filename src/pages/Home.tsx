import './css/Home.scss'
import FunctionComponentCycleLife from './FunctionComponent';

import SetInterval from './SetInterval';

export const Home = () => {
    return (
        <div className="home">

            <FunctionComponentCycleLife />
            {/* <SetInterval /> */}
        </div>
    );
};
