const funcs = require('./consultant_fn');

// test(`Message Should be 'Consultant Successfully created'` , async ()=>{
//     expect.assertions(1);
//     const response = await funcs.createConsultant();
//     expect(response.msg).toBe('Consultant Successfully created');
// });

test(`Consultant ID should be 1 '5c9f942bbc90b634340a58c0'`, async ()=>{
    expect.assertions(1);
    const response = await funcs.getConsultant();
    expect(response.data._id).toBe('5c9f942bbc90b634340a58c0');
});

// test(`Message Should be 'Board Member successfully added'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.addBoardMember('Board Member','President');
//     expect(response.msg).toBe('Board Member successfully added');
// });

// test(`Message Should be 'Event successfully added'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.addEvent('Test Event','This Event was created as a test');
//     expect(response.msg).toBe('Event successfully added');
// });

// test(`Message Should be 'Partner successfully added'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.addPartner();
//     expect(response.msg).toBe('Partner successfully added');
// });

// test(`Message Should be 'Report successfully added'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.addReport('Test Report');
//     expect(response.msg).toBe('Report successfully added');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteConsultant();
//     expect(response.msg).toBe('deleted');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteBoardMember('Board Member','President');
//     expect(response.msg).toBe('deleted');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteEvent('Test Event', 'This Event was created as a test');
//     expect(response.msg).toBe('deleted');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deletePartner();
//     expect(response.msg).toBe('deleted');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteReport('Test Report');
//     expect(response.msg).toBe('deleted');
// });
