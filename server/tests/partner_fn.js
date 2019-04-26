const fetch = require('node-fetch');
const functions = {
    createPartner: async (fieldOfWork) => {
        try {
            const data = {
                fieldOfWork: fieldOfWork
            }
            const body = JSON.stringify(data);

            const response = await fetch('http://localhost:5000/api/profiles/partner/5c941b337474cac0100bc3e9', {
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
    getPartner: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/profiles/partner/5c941bf296d97cdbb0ec50cd')
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    updatePartner: async (fieldOfWork) => {
        try {
            const data = {
                fieldOfWork: fieldOfWork
            }
            const body = JSON.stringify(data);

            const response = await fetch('http://localhost:5000/api/profiles/partner/5c941bf296d97cdbb0ec50cd', {
                method: 'PUT',
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
    addBoardMember: async (name, position) => {
        try {
            const data = {
                name: name,
                position : position
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/partner/board-members/5c965abc057f691975fbca1e',{
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
            const response = await fetch('http://localhost:5000/api/profiles/partner/events/5c965abc057f691975fbca1e',{
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
            const response = await fetch('http://localhost:5000/api/profiles/partner/partners/5c965abc057f691975fbca1e/5c941bf296d97cdbb0ec50cd',{
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
    addProject: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/profiles/partner/past-projects/5c95302e28ab73e2f4a0fb7f/5c962a4c0f3ef52e1974de42',{
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
    deleteBoardMember: async (name, position) => {
        try {
            const data = {
                name: name,
                position : position
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/partner/board-members/5c965abc057f691975fbca1e',{
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
            const response = await fetch('http://localhost:5000/api/profiles/partner/events/5c965abc057f691975fbca1e',{
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
    deletePartner2: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/profiles/partner/partners/5c965abc057f691975fbca1e/5c941bf296d97cdbb0ec50cd',{
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
    deleteProject: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/profiles/partner/past-projects/5c95302e28ab73e2f4a0fb7f/5c962a4c0f3ef52e1974de42',{
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
    deletePartner: async () => {
        try {
            const response = await fetch('',{
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