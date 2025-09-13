import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIService from '../services/APIService';


const EntryCreate: React.FC = () => {
    const [subject, setSubject] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [note, setNote] = useState<string>('');
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newEntry = { subject, title, note };

        APIService.create(newEntry)
        .then(() => {
            console.log("Item Data Created: ", newEntry);
            navigate('/entries/')
        })
        .catch(error => {
            setError(error);
            console.error("Could Not Save Note: ",error);
            setLoading(false);
        });

        setLoading(false);

    };


    if (loading) {
        
        return (
            <div>Requesting Processing....</div>
        );

    };


    if (error) {

        return (
            <div>
                <p style={{ color: 'red' }}>ERROR: {error}</p>
                <button onClick={() => navigate('/home')} className="button-back-error">
                    Go Home
                </button>
            </div>
        );

    };

    return (
        <div className='create-container'>
            <div className='create-container-title'>
                <h1>Create Entry</h1>
            </div>
            <form onSubmit={handleSubmit} className='create-form'>
                {error && <p style={{ color: 'red'}}>{error}</p>}
                <div>
                    <input
                        type='text'
                        placeholder='subject...'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='title...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='note..'
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        required
                    />
                </div>
                <div className='button-container'>
                    <button onClick={() => navigate(-1)} className='button-back'>
                        Back
                    </button>
                    <button type="submit" className='button-submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
    
};

export default EntryCreate;
