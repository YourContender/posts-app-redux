import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const Spinner = () => {
    const flag = useSelector(state => {
        console.log('state>>>> ', state);
        const { appReducer } = state;
        return appReducer.loader
    })

    return (
        <div className="loader-styles">
            <Loader
                type='TailSpin'
                color='#00bfff'
                height={100}
                width={100}
                timeout={300}
                visible={flag}
            />
        </div>
    )
}

export default Spinner;
