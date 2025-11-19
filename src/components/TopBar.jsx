import { useState, useEffect } from 'react';


function TopBar({ focusedApp }) {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const getHours = () => {
        return currentTime.getHours().toString().padStart(2, '0');
    };

    const getMinutes = () => {
        return currentTime.getMinutes().toString().padStart(2, '0');
    };

    const getSeconds = () => {
        return currentTime.getSeconds().toString().padStart(2, '0');
    };

    return (
        <div className="fixed top-0 left-0 right-0 h-9 bg-orange-100/20 backdrop-blur-md text-white flex items-center justify-between px-6"  >
            <div className="flex-1 flex justify-start">
                <span className='px-4 py-0 rounded-2xl bg-orange-200/60 border border-orange-300/80 shadow-lg text-white'>
                    Auriel OS
                </span>
            </div>

            <div className="flex-1 flex justify-center">
                { focusedApp !==  null &&
                (
                <span className='px-4 py-0 rounded-2xl bg-orange-200/60 border border-orange-300/80 shadow-lg text-white animate-fadeIn'>
                    {focusedApp}
                </span>
                )
                }
            </div>

            <div className="flex-1 flex justify-end">
                <span className='px-4 py-0 rounded-2xl bg-orange-200/60 border border-orange-400/80 shadow-lg text-white'>
                    {`${getHours()}:${getMinutes()}:${getSeconds()}`}
                </span>
            </div>
        </div>
    );
}

export default TopBar;