import { useEffect, useState } from 'react';

const Success = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 300); // Delay to trigger the animation
    }, []);

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
        transition: 'transform 1s ease-in-out',
    };

    const messageStyle = {
        fontSize: '3rem',
        color: '#fff',
        textShadow: '2px 4px 10px rgba(0, 0, 0, 0.2)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transition: 'opacity 2s ease-in-out, transform 1s ease',
        animation: isVisible
            ? 'bounce 1s ease forwards, fadeIn 2s ease-in-out'
            : '',
    };

    return (
        <div style={containerStyle}>
            <h1 style={messageStyle}>Payment Success!</h1>
            <style>
                {`
                @keyframes bounce {
                    0% { transform: scale(0.8); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }

                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                `}
            </style>
        </div>
    );
};

export default Success;
