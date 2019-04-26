const funcs = require('./partner_fn');

// test(`Message Should be 'Partner was created successfully'` , async ()=>{
//     const fieldOfWork = 'Test';
//     expect.assertions(1);
//     const response = await funcs.createPartner(fieldOfWork);
//     expect(response.msg).toBe('Partner was created successfully');
// });

test(`Partner ID Should be '5c941bf296d97cdbb0ec50cd'` , async ()=>{
    expect.assertions(1);
    const response = await funcs.getPartner();
    expect(response.data._id).toBe('5c941bf296d97cdbb0ec50cd');
});

// test(`Message Should be 'Partner updated successfully'` , async ()=>{
//     const fieldOfWork = 'Test';
//     expect.assertions(1);
//     const response = await funcs.updatePartner(fieldOfWork);
//     expect(response.msg).toBe('Partner updated successfully');
// });

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

// test(`Past Projects Length should be 14`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.addProject();
//     expect(response.data.length).toBe(14);
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
//     const response = await funcs.deletePartner2();
//     expect(response.msg).toBe('deleted');
// });

// test(`Message should be 'deleted`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteProject();
//     expect(response.msg).toBe('deleted');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deletePartner();
//     expect(response.msg).toBe('deleted');
// });


