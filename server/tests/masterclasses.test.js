const funcs = require('./masterclasses_fn');

// test(`Message Should be 'Your Request was submitted successfully'` , async ()=>{
//     expect.assertions(1);
//     const response = await funcs.requireAssessment();
//     expect(response.msg).toBe('Your Request was submitted successfully');
// });

// test(`Message Should be 'Response Saved'` , async ()=>{
//     expect.assertions(1);
//     const response = await funcs.respond('accepted');
//     expect(response.msg).toBe('Response Saved');
// });

// test(`Message Should be 'Request was successfully received'` , async ()=>{
//     expect.assertions(1);
//     const response = await funcs.apply();
//     expect(response.msg).toBe('Request was successfully received');
// });

test(`Recommended Masterclasses Length should be 5` , async ()=>{
    expect.assertions(1);
    const response = await funcs.getRecommended();
    expect(response.data.length).toBe(5);
});

// test(`Message should be 'Assessment successfully sent'` , async ()=>{
//     expect.assertions(1);
//     const response = await funcs.Assess();
//     expect(response.msg).toBe('Assessment successfully sent');
// });
