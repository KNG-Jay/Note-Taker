import { useEffect, useState } from "react";

const ExitPage = ({ timeout = 5000 }) => {
    const [remainingTime, setRemainingTime] = useState(timeout / 1000);
    const close = window.close();

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.clear();
            window.close();
        }, timeout);

        const interval = setInterval(() => {
            setRemainingTime((prev) => {
                const newTime = prev -1;
                if (newTime <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return newTime;
            });
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [close, timeout]);

    return (
        <div className="exit-page">
            <div className="exit-page-text">
                <h1>Exiting...</h1>
                <h4>Closing in {remainingTime} seconds.....</h4>
            </div>
        </div>
    );

};

export default ExitPage;
