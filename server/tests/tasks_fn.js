const fetch = require('node-fetch');
const functions = {
    getAll: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tasks/all')
            const json = await response.json();
            return json;
        }
        catch (e) {
            console.log(e)
        }
    },
    applyEligible: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tasks/apply/5c9666a6f17db66cb83411d3/5c966769563d6e0fcc53a6dd',{
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
    applyNotEligible: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tasks/apply/5c966ec2cd9d4e42609ed0a8/5c966769563d6e0fcc53a6dd',{
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
    deleteApplication: async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tasks/5c9666a6f17db66cb83411d3/5c966769563d6e0fcc53a6dd',{
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
    partnerPostTask: async (levelOfCommitment, monetaryCompensation, experienceLevel, skills) =>{
        try {
            const data = {
                levelOfCommitment: levelOfCommitment,
                monetaryCompensation: monetaryCompensation,
                experienceLevel: experienceLevel,
                skills: skills
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/partner/5c941c4acb4bc3216896d13c/5c9bfa4aae4b8b53f8b647c6', {
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
    partner2PostTask: async (levelOfCommitment, monetaryCompensation, experienceLevel, skills) =>{
        try {
            const data = {
                levelOfCommitment: levelOfCommitment,
                monetaryCompensation: monetaryCompensation,
                experienceLevel: experienceLevel,
                skills: skills
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/partner/5c95302e28ab73e2f4a0fb7f/5c9bfa4aae4b8b53f8b647c6', {
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
    partnerPostTaskNotReviewed: async (levelOfCommitment, monetaryCompensation, experienceLevel, skills) =>{
        try {
            const data = {
                levelOfCommitment: levelOfCommitment,
                monetaryCompensation: monetaryCompensation,
                experienceLevel: experienceLevel,
                skills: skills
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/partner/5c941c4acb4bc3216896d13c/5c9bfa98a0dbc31e60bbbfbb', {
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
    partnerPostTaskNeedConsultancy: async (levelOfCommitment, monetaryCompensation, experienceLevel, skills) =>{
        try {
            const data = {
                levelOfCommitment: levelOfCommitment,
                monetaryCompensation: monetaryCompensation,
                experienceLevel: experienceLevel,
                skills: skills
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/partner/5c95302e28ab73e2f4a0fb7f/5c95307a28ab73e2f4a0fb80', {
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
    partnerRespond: async (theResponse) =>{
        try {
            const data = {
                response: theResponse
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/partner/respond/5c9666a6f17db66cb83411d3/5c941c4acb4bc3216896d13c/5c9e2459cf353c13e426a316', {
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
    partnerRespondNeedConsultancy: async (theResponse) =>{
        try {
            const data = {
                response: theResponse
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/partner/respond/5c9666a6f17db66cb83411d3/5c95302e28ab73e2f4a0fb7f/5c962a4c0f3ef52e1974de42', {
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
    partner2Respond: async (theResponse) =>{
        try {
            const data = {
                response: theResponse
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/partner/respond/5c9666a6f17db66cb83411d3/5c941c68745199c344617907/5c9e2459cf353c13e426a316', {
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
    partnerRespondNotMember: async (theResponse) =>{
        try {
            const data = {
                response: theResponse
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/partner/respond/5c966ec2cd9d4e42609ed0a8/5c941c4acb4bc3216896d13c/5c9e2459cf353c13e426a316', {
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
    review: async () => {
        try{
            const response = await fetch('http://localhost:5000/api/tasks/admin/5c9539cd14a8d3e8cca0c9c7/5c962a550f3ef52e1974de43', {
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
    addExtra: async (extra) =>{
        try {
            const data = {
                extra: extra
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/extra/5c9539cd14a8d3e8cca0c9c7/5c962a4c0f3ef52e1974de42', {
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
    editTask: async (levelOfCommitment, monetaryCompensation, experienceLevel, skills) =>{
        try {
            const data = {
                levelOfCommitment: levelOfCommitment,
                monetaryCompensation: monetaryCompensation,
                experienceLevel: experienceLevel,
                skills: skills
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/edit/5c9539cd14a8d3e8cca0c9c7/5c962a4c0f3ef52e1974de42', {
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
    deleteTask: async () =>{
        try {
            const response = await fetch('http://localhost:5000/api/tasks/admin/5c9539cd14a8d3e8cca0c9c7/5c9e1df02624480250de74c9', {
                method: 'DELETE',
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
    consultantPostTask: async (levelOfCommitment, monetaryCompensation, experienceLevel, skills) =>{
        try {
            const data = {
                levelOfCommitment: levelOfCommitment,
                monetaryCompensation: monetaryCompensation,
                experienceLevel: experienceLevel,
                skills: skills
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/consultant/5c9427e9ce3a2dda54f0910d/5c95307a28ab73e2f4a0fb80', {
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
    consultantPostTaskNeedConsultancy: async (levelOfCommitment, monetaryCompensation, experienceLevel, skills) =>{
        try {
            const data = {
                levelOfCommitment: levelOfCommitment,
                monetaryCompensation: monetaryCompensation,
                experienceLevel: experienceLevel,
                skills: skills
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/consultant/5c9427e9ce3a2dda54f0910d/5c9bfa4aae4b8b53f8b647c6', {
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
    consultantPostTaskNotReviewed: async (levelOfCommitment, monetaryCompensation, experienceLevel, skills) =>{
        try {
            const data = {
                levelOfCommitment: levelOfCommitment,
                monetaryCompensation: monetaryCompensation,
                experienceLevel: experienceLevel,
                skills: skills
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/tasks/consultant/5c9427e9ce3a2dda54f0910d/5c9bfa98a0dbc31e60bbbfbb', {
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
    }

};
module.exports = functions;
