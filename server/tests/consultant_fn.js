const fetch = require('node-fetch');
const functions = {
    createConsultant: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/profiles/consultant/5c941d47c49fc207a0cd1e52',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    getConsultant: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/profiles/consultant/5c9f942bbc90b634340a58c0')
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    addBoardMember: async (name, position) => {
        try {
            const data = {
                name: name,
                position : position
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/consultant/board-members/5c9f93f2bc90b634340a58bf',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    addEvent: async (title, description) => {
        try {
            const data = {
                title: title,
                description: description
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/consultant/board-members/5c9f93f2bc90b634340a58bf',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    addPartner: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/profiles/consultant/partners/5c9f93f2bc90b634340a58bf/5c941c4acb4bc3216896d13c',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    addReport: async (report) => {
        try {
            const data = {
                report: report
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/consultant/reports/5c9f93f2bc90b634340a58bf',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    deleteBoardMember: async (name, position) => {
        try {
            const data = {
                name: name,
                position : position
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/consultant/board-members/5c9f93f2bc90b634340a58bf',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    deleteEvent: async (title, description) => {
        try {
            const data = {
                title: title,
                description: description
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/consultant/events/5c9f93f2bc90b634340a58bf',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    deletePartner: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/profiles/consultant/partners/5c9f93f2bc90b634340a58bf/5c941c4acb4bc3216896d13c',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    deleteReport: async (report) => {
        try {
            const data = {
                report: report
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/consultant/reports/5c9f93f2bc90b634340a58bf',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    deleteConsultant: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/profiles/consultant/5c9fc72c23b4b334e0f0b917',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },


};
module.exports = functions;