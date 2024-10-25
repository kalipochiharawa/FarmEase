// src/Card.js
import React from "react";

export default function Card({ title, children, editable }) {
    return (
        <div className="relative w-full max-w-md p-4 bg-white border rounded-lg shadow-sm mb-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-green-600 font-semibold">{title}</h2>
                {editable && (
                    <button className="text-gray-500">Edit</button>
                )}
            </div>
            <div>{children}</div>
        </div>
    );
}
