import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <div className="welcome-message">
                <h1>Welcome Home</h1>
                <p>You have sucessfully connected to the frontend service!</p>
            </div>
            <div className="button-container">
                <button className="view-button" onClick={() => navigate('/entries')}>
                    All Notes
                </button>
                <button className="create-button" onClick={() => navigate('/create-note')}>
                    Create Note
                </button>
            </div>
        </div>
    );

};

export default HomePage;
