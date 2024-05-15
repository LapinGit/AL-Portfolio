import React from 'react';

const PrimaryPDF = process.env.PDF_FILE_URL

export const metadata = {
    title: "AL | Resume",
};

export default function Resume() {
    return (
        <div className="w-full h-[calc(100vh-75px)] transition-all delay-200 mx-auto my-0">
            <iframe src={PrimaryPDF} width="100%" height="100%" style={{ border: 'none' }}></iframe>
        </div>
    );
}
