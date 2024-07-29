import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '1025794607775-qee9gb4mgafne620c78j2mjummdheirc.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDPA08jvZMut_nWcq-xZZg5lhF22rWbZsA';

function GoogleAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    useEffect(() => {
        const initClient = async () => {
            try {
                await gapi.load('client:auth2', async () => {
                    await gapi.client.init({
                        apiKey: API_KEY,
                        clientId: CLIENT_ID,
                        scope: 'email'
                    });
                });
            } catch (error) {
                console.error('Error initializing Google API client', error);
            }
        };
        initClient();
    }, []);

    const handleLogin = async () => {
        try {
            const authInstance = gapi.auth2.getAuthInstance();
            if (authInstance) {
                const user = await authInstance.signIn();
                const profile = user.getBasicProfile();
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                setIsLoggedIn(!isLoggedIn);

            } else {
                console.error('Google Auth instance not initialized');
            }
        } catch (error) {
            console.error('Error during sign-in', error);
        }
    };

    const handleLogout = async () => {
        try {
            const authInstance = gapi.auth2.getAuthInstance();
            if (authInstance) {
                setIsLoggedIn(!isLoggedIn);
                await authInstance.signOut();
                console.log('User signed out.');
            } else {
                console.error('Google Auth instance not initialized');
            }
        } catch (error) {
            console.error('Error during sign-out', error);
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <button className='btn btn-danger' onClick={handleLogout}> Logout</button>
            ) : (
                <button className='btn btn-success' onClick={handleLogin}>Login with Google</button>
            )}
        </div>

    );
};

export default GoogleAuth;