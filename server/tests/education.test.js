const funcs = require('./education_fn');

// test(`Message Should be 'Education was created successfully'` , async ()=>{
//     expect.assertions(1);
//     const response = await funcs.createEducationalOrganization();
//     expect(response.msg).toBe('Education was created successfully');
// });

// test(`EducationalOrganization  ID should be 1 '5c9f7e380e57b6046a449884'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.getEducationalOrganization();
//     expect(response.data._id).toBe('5c9f7e380e57b6046a449884');
// });

test(`Message Should be 'Course successfully added'`, async ()=>{
    expect.assertions(1);
    const response = await funcs.addcourse("asd","asassd",123);
    expect(response.msg).toBe('Course successfully added');
});

// test(`Message Should be 'Trainer successfully added'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.addtrainer("asd","asassd");
//     expect(response.msg).toBe('Trainer successfully added');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteCourse('Test Course', 'This is a Test Course', 500);
//     expect(response.msg).toBe('deleted');
// });

// test(`Message Should be 'Certificate successfully added'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.addCertificates('Test Certificate', 'This is a test Certificate')
//     expect(response.msg).toBe('Certificate successfully added');
// });

// test(`Message Should be 'Training Program successfully added'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.addTrainingProgram('Test Program', 'This is a test Program','Karim,Moataz');
//     expect(response.msg).toBe('Training Program successfully added');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteTrainer('Test Trainer', 'Test Bio')
//     expect(response.msg).toBe('deleted');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteCertificates('Test Certificate', 'This is a test Certificate')
//     expect(response.msg).toBe('deleted');
// });

// test(`Message Should be 'deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteTrainingProgram('Test Program', 'This is a test Program', 'karim,moataz')
//     expect(response.msg).toBe('deleted');
// });

// test(`Message Should be 'Profile Successfully deleted'`, async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteEducationalOrganization()
//     expect(response.msg).toBe('Profile Successfully deleted');
// });
