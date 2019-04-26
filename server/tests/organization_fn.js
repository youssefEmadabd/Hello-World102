const fetch = require('node-fetch');
const functions = {
    createOrganization: async (name, phone, email, address, youtube, facebook, twitter, instagram, linkedin, avatar) => {
        try {
            const data = {
                name: name,
                phone: phone,
                email: email,
                address: address,
                youtube: youtube,
                facebook: facebook,
                twitter: twitter,
                instagram: instagram,
                linkedin: linkedin,
                avatar: avatar
            }
            const body = JSON.stringify(data);
            const response = await fetch('http://localhost:5000/api/profiles/organization/5c941ca6c49fc207a0cd1e51', {
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