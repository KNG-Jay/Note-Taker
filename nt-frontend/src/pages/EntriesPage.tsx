import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIService from "../services/APIService";
import type { Entry } from "../components/EntryType";


const EntriesPage: React.FC = () => {
    const [data, setData] = useState<Entry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [rowCount, setRowCount] = useState<number>(0);    const navigate = useNavigate();

    useEffect (() => {
        setLoading(true);
        getData();

    }, []);

    const getData = () => {
        APIService.getEntries()
        .then(response => {
            setData(response.data);
            setRowCount(response.data.length);
        })
        .catch(e => {
            console.error(e);
            setLoading(false);
        });
        
        setLoading(false);
    };


    if (loading) return <div>Loading...</div>

    return (
        <div className="entries-page">
            <div className="title-bar">
                
            </div>
            <div className="entries-container">
                <div className="entries-container-header">
                    <h2>Entries: {rowCount}</h2>
                </div>
                <table className="entries-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Title</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry) => (
                            <tr key={entry.id}>
                                <td>{entry.subject}</td>
                                <td>{entry.title}</td>
                                <td>{entry.note}</td>
                                <td>
                                    <div className="entries-table-buttons">
                                        <button 
                                        className="button-view"
                                        onClick={() => navigate(`/entries/${entry.id}`)}>
                                            View
                                        </button>
                                        {/*
                                        <button
                                        className="button-delete"
                                        onClick={() => console.error("Not Configured")}>
                                            Delete
                                        </button>
                                        */}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="entries-container-footer">

                </div>
            </div>
        </div>
    );
};

export default EntriesPage;
