const fetch = require('node-fetch');

const functions = {
    createApplication: async (description , needConsultancy) =>{
        try {
            const data = {
                description: description,
                needConsultancy: needConsultancy
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/applications/5c941c4acb4bc3216896d13c', {
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
    updateApplication: async (description, needConsultancy) =>{
      try{
          const data = {
              description: description,
              needConsultancy: needConsultancy
          }
          const body = JSON.stringify(data);
          const response = await fetch('http://localhost:5000/api/applications/5c941c4acb4bc3216896d13c/5c9bfa4aae4b8b53f8b647c6', {
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
    partnerNegotiate: async (text) => {
        try{
            const data = {
                text: text
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/applications/partner/negotiate/5c941c4acb4bc3216896d13c/5c9bfa4aae4b8b53f8b647c6', {
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
    partnerNegotiation: async () => {
        try{
            const response = await fetch('http://localhost:5000/api/applications/partner/negotiation/5c941c4acb4bc3216896d13c/5c9bfa4aae4b8b53f8b647c6')
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    getApplications: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/applications/admin/5c9539cd14a8d3e8cca0c9c7')
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    review: async () => {
        try{
            const response = await fetch('http://localhost:5000/api/applications/admin/5c9539cd14a8d3e8cca0c9c7/5c9bfa4aae4b8b53f8b647c6', {
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
    adminNegotiate: async (text) => {
        try{
            const data = {
                text: text
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/applications/admin/negotiate/5c9539cd14a8d3e8cca0c9c7/5c9bfa4aae4b8b53f8b647c6', {
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
    adminNegotiation: async () => {
        try{
            const response = await fetch('http://localhost:5000/api/applications/admin/negotiation/5c9539cd14a8d3e8cca0c9c7/5c9bfa4aae4b8b53f8b647c6')
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    getReviewedApplications: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/applications/all/5c9427e9ce3a2dda54f0910d')
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    apply: async () => {
        try{
            const response = await fetch('http://localhost:5000/api/applications/apply/5c9d123a7477172a50c75da0/5c9bfa4aae4b8b53f8b647c6', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    respond: async (theResponse) => {
        try{
            const data = {
                response: theResponse
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/applications/respond/5c9539cd14a8d3e8cca0c9c7/5c9d123a7477172a50c75da0/5c9bfa4aae4b8b53f8b647c6', {
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

};
module.exports = functions;