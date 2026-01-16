'use client'
import React, { useState, useEffect } from 'react'

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('trademark'); // trademark or contact
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://onlinedigitalindia.com/api/dashboard_api.php?type=${activeTab}`);
            const result = await res.json();
            if (result.success) setData(result.data);
        } catch (error) {
            console.error("Failed to fetch dashboard data");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
                        <p className="text-slate-500 text-sm">Manage all form submissions from one place.</p>
                    </div>
                    <button onClick={fetchData} className="bg-[#b45309] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-amber-700 transition">
                        RELOAD DATA
                    </button>
                </div>

                {/* Tabs - Scalable for more forms */}
                <div className="flex gap-4 mb-6 border-b border-slate-200">
                    <button 
                        onClick={() => setActiveTab('trademark')}
                        className={`pb-4 px-4 text-sm font-bold transition ${activeTab === 'trademark' ? 'border-b-2 border-[#b45309] text-[#b45309]' : 'text-slate-400'}`}>
                        TRADEMARK REGISTRATIONS
                    </button>
                    <button 
                        onClick={() => setActiveTab('contact')}
                        className={`pb-4 px-4 text-sm font-bold transition ${activeTab === 'contact' ? 'border-b-2 border-[#b45309] text-[#b45309]' : 'text-slate-400'}`}>
                        CONTACT INQUIRIES
                    </button>
                </div>

                {/* Data Table */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="overflow-x-auto">
                        {loading ? (
                            <div className="p-20 text-center text-slate-400 animate-pulse">Loading data...</div>
                        ) : data.length === 0 ? (
                            <div className="p-20 text-center text-slate-400">No submissions found.</div>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="p-4 text-xs font-bold uppercase text-slate-500">ID</th>
                                        <th className="p-4 text-xs font-bold uppercase text-slate-500">Name</th>
                                        <th className="p-4 text-xs font-bold uppercase text-slate-500">Email</th>
                                        <th className="p-4 text-xs font-bold uppercase text-slate-500">Phone</th>
                                        <th className="p-4 text-xs font-bold uppercase text-slate-500">
                                            {activeTab === 'trademark' ? 'State' : 'Service'}
                                        </th>
                                        {activeTab === 'contact' && <th className="p-4 text-xs font-bold uppercase text-slate-500">Message</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, idx) => (
                                        <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition">
                                            <td className="p-4 text-sm font-medium text-slate-400">{row.id}</td>
                                            <td className="p-4 text-sm font-bold text-slate-800">{row.name}</td>
                                            <td className="p-4 text-sm text-slate-600">{row.email}</td>
                                            <td className="p-4 text-sm text-slate-600">{row.phone || row.number}</td>
                                            <td className="p-4">
                                                <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
                                                    {row.state || row.service}
                                                </span>
                                            </td>
                                            {activeTab === 'contact' && <td className="p-4 text-sm text-slate-500 max-w-xs truncate">{row.message}</td>}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}