'use client'
import "@/app/globals.css"
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const Error = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdown(countdown => countdown - 1);
        }, 1000);

        const redirectTimeout = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => {
            clearInterval(countdownInterval);
            clearTimeout(redirectTimeout);
        };
    }, [router]);

    return (
        <div className="error">
            <h1>This is 404 ERROR</h1>
            <p>Redirecting to home page in {countdown} seconds</p>
        </div>
    );
}

export default Error;