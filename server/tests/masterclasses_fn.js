const fetch = require('node-fetch');

const functions = {
    requireAssessment: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/masterclasses/require/5c966ec2cd9d4e42609ed0a8/5c9e6b3da9a9201a08edd936', {
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
    respond: async (theResponse) => {
        try {
            const data = {
                response: theResponse
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/masterclasses/respond/5c966ec2cd9d4e42609ed0a8/5c9e6b3da9a9201a08edd936', {
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
    apply: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/masterclasses/5c966ec2cd9d4e42609ed0a8/5c9fc8e7bd4d924dccb49158', {
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
    getRecommended: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/masterclasses/5c9677e786479b242cdcf572');
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    Assess: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/masterclasses/assess/5c9677e786479b242cdcf572/5c9e6b3da9a9201a08edd936/5c9fc8e7bd4d924dccb49158', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },

};

module.exports = functions;