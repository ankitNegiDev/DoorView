"use client";

import { useState } from "react";

export default function CallForm() {
    const [form, setForm] = useState({
        appointmentType: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        zip: "",
        address: "",
        date: "",
        time: "",
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted (frontend only):", form);
    }

    return (
        <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-xl p-6 mt-10">
            {/* --- CALL US --- */}
            <div className="text-center mb-6">
                <div className="flex items-center my-4">
                    <div className="grow h-px bg-gray-300"></div>
                    <span className="mx-4 text-sm text-gray-400 uppercase tracking-wide">Call Us</span>
                    <div className="grow h-px bg-gray-300"></div>
                </div>
                <p className="text-3xl font-bold text-gray-800 hover:text-yellow-500 hover:cursor-pointer">
                    480-339-6145
                </p>

                <div className="flex items-center my-4">
                    <div className="grow h-px bg-gray-300"></div>
                    <span className="mx-4 text-sm text-gray-400 uppercase tracking-wide">or</span>
                    <div className="grow h-px bg-gray-300"></div>
                </div>
            </div>

            {/* --- TITLE --- */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Schedule a Free <br /> Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Appointment type */}
                <select
                    name="appointmentType"
                    className="w-full rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    onChange={handleChange}
                >
                    <option value="">Book In-Home Appointment</option>
                    <option value="home">Home Consultation</option>
                    <option value="virtual">Virtual Consultation</option>
                </select>

                {/* First + Last name */}
                <div className="flex gap-3">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-1/2 rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-1/2 rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="text"
                    name="phone"
                    placeholder="Mobile Phone"
                    className="w-full rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="zip"
                    placeholder="ZIP"
                    className="w-full rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="w-full rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    onChange={handleChange}
                />

                {/* Date */}
                <input
                    type="date"
                    name="date"
                    className="w-full rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    onChange={handleChange}
                />

                {/* Time */}
                <select
                    name="time"
                    className="w-full rounded-lg px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    onChange={handleChange}
                >
                    <option value="">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>

                {/* BUTTON */}
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg text-lg transition flex items-center justify-center gap-2"
                >
                    Schedule Now
                    <span className="text-xl">›</span>
                </button>
            </form>
        </div>
    );
}
