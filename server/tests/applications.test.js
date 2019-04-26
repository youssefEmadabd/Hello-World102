const funcs = require('./applications_fn');

// test('Application Should be created with the specified description' , async ()=>{
//     const desc = 'This Application was created as a test for Create Application Post Request';
//     expect.assertions(1);
//     const response = await funcs.createApplication(desc,false);
//     expect(response.data.description).toBe(desc);
// });

// test('Application Should be updated with the specified description' , async ()=>{
//     const desc = 'This Application was updated as a test for Update Application Put Request';
//     expect.assertions(1);
//     const response = await funcs.updateApplication(desc,false);
//     expect(response.msg).toBe('Application updated successfully');
// });

// test(`Message Should be 'Message Sent Successfully'` ,async ()=>{
//     const text = 'Test Message';
//     expect.assertions(1);
//     const response = await funcs.partnerNegotiate(text);
//     expect(response.msg).toBe('Message Sent successfully');
// });

test('Messages length should be 7' ,async ()=>{
    expect.assertions(1);
    const response = await funcs.partnerNegotiation();
    expect(response.data.length).toBe(7);
});

// test('Applications Should be 3', async ()=>{
//     expect.assertions(1);
//     const response = await funcs.getApplications();
//     expect(response.data.length).toBe(3);
// });

// test('Application Should be reviewed', async ()=>{
//     expect.assertions(1);
//     const response = await funcs.review();
//     expect(response.data.reviewed).toBeTruthy();
// });

// test(`Message Should be 'Message Sent Successfully'` ,async ()=>{
//     const text = 'Test Message';
//     expect.assertions(1);
//     const response = await funcs.adminNegotiate(text);
//     expect(response.msg).toBe('Message Sent successfully');
// });

test('Messages length should be 7' ,async ()=>{
    expect.assertions(1);
    const response = await funcs.adminNegotiation();
    expect(response.data.length).toBe(7);
});


// test('Applications Should be 3', async ()=>{
//     expect.assertions(1);
//     const response = await funcs.getReviewedApplications();
//     expect(response.data.length).toBe(3);
// });

// test('Applications Should be submitted successfully', async ()=>{
//     expect.assertions(1);
//     const response = await funcs.apply();
//     expect(response.msg).toBe('Your Application was submitted successfully');
// });

// test(`Response Should be 'accepted'` ,async ()=>{
//     const theResponse = 'accepted';
//     expect.assertions(1);
//     const response = await funcs.respond(theResponse);
//     expect(response.data.status).toBe(theResponse);
// });