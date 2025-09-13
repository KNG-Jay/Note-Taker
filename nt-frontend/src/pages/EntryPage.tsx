import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import APIService from "../services/APIService";
import type { Entry } from "../components/EntryType";


const EntryPage: React.FC = () => {
    const [data, setData] = useState<Entry | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();

    useEffect (() => {
        setLoading(true);
        getData();

    }, []);


    const getData = () => {
        console.log("ID Recieved: " + Number(id));
        APIService.get(Number(id))
        .then(response => {
            setData(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.error(e);
            setError(e);
            setLoading(false);
        });

        setLoading(false);

    };

    const handleBack = () => {
        navigate('/entries');

    };

    const handleEdit = () => {
        navigate(`/entries/${id}/edit`);

    };

    const handleDelete = () => {
        APIService.delete(Number(id))
        .then(response => {
            console.log("Deletion Complete: " + response.data);
            handleBack();
        })
        .catch(e => {
            console.error(e);
            setError(e);
        });

    };


    if (loading) {
        return (
            <div>Loading Entry...</div>
        );

    };

    if (error) {
        return (
            <div>
                <p style={{ color: 'red' }}>ERROR: {error}</p>
                <button onClick={handleBack} className="entry-page-button-back-error">
                    Back To Entries
                </button>
            </div>
        );

    };

    if (!data) {
        return (
            <div className="entry-page-error-container">
                <p>Entry Not Found.</p>
                <button onClick={handleBack} className="entry-page-button-back">
                    Back To Entries
                </button>
            </div>
        );

    };

    return (
        <div className="entry-page">
            <div className="entry-container-header">
                <button onClick={handleBack} className="entry-container-header-button-back">
                    Back
                </button>
                <button onClick={handleEdit} className="entry-container-header-button-edit">
                    Edit
                </button>
                <button onClick={handleDelete} className="entry-container-header-button-delete">
                    Delete
                </button>
            </div>
            <div className="entry-container">
                <div className="entry-subject">
                    <h3>Subject: </h3>
                    <span>{data.subject}</span>
                </div>
                <div className="entry-title">
                    <h3>Title: </h3>
                    <span>{data.title}</span>
                </div>
                <div className="entry-note">
                    <h3>Note: </h3>
                    <span>{data.note}</span>
                </div>
            </div>
            <div className="entry-container-footer">

            </div>
        </div>
    );

};

export default EntryPage;
