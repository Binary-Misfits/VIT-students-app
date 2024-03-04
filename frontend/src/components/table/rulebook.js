import React, { useState, useEffect } from 'react';

const Rulebook = () => {
    const [rulebookData, setRulebookData] = useState([]);

    useEffect(() => {
        fetchRulebookData();
    }, []);

    const fetchRulebookData = async () => {
        try {
            const response = await fetch('/rulebook');
            const data = await response.json();
            setRulebookData(data);
        } catch (error) {
            console.error('Error fetching rulebook data:', error);
        }
    };

    return (
        <div className="overflow-x-auto pt-10">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">SL</th>
                        <th className="py-3 px-6 text-left">Title</th>
                        <th className="py-3 px-6 text-left">Description</th>
                        {/* Add more table headers if needed */}
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {rulebookData.map(entry => (
                        <tr key={entry.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{entry.id}</td>
                            <td className="py-3 px-6 text-left">{entry.name}</td>
                            <td className="py-3 px-6 text-left">{entry.description}</td>
                            {/* Add more table cells if needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Rulebook;
