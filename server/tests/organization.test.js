const funcs = require('./organization_fn');

 test(`Message Should be 'Member was created successfully'` ,async ()=>{
     const name = 'TestOrg';
     const phone = 122;
     const email = 'org@tests.com';
     const address = 'Madinet Nasr';
         const youtube = 'https://www.youtube.com/';
         const twitter = 'https://www.twitter.com/';
         const instagram = 'https://www.instagram.com/';
         const facebook = 'https://www.facebook.com/';
         const linkedin = 'https://www.linkedin.com/';
     const avatar = 'tst'
     expect.assertions(1);
     const response = await funcs.createOrganization(name,phone,email,address,youtube,facebook,twitter,instagram,linkedin,avatar);
     expect(response.msg).toBe('Organization was created successfully');
 })