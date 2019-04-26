const funcs = require('./tasks_fn');

// test('Tasks Should be 3' ,async ()=>{
//     expect.assertions(1);
//     const response = await funcs.getAll();
//     expect(response.data.length).toBe(3);
// });
//
// test(`Message Should be 'Your Application was submitted successfully'` ,async ()=>{
//     const msg = 'Your Application was submitted successfully';
//     expect.assertions(1);
//     const response = await funcs.applyEligible();
//     expect(response.msg).toBe(msg);
// });


// test(`Message Should be 'Member is not Eligible to Apply for this Task'` ,async ()=>{
//     const msg = 'Member is not Eligible to Apply for this Task';
//     expect.assertions(1);
//     const response = await funcs.applyNotEligible();
//     expect(response.msg).toBe(msg);
// });

// test('Task Applicants Should be 0' ,async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteApplication();
//     expect(response.data.length).toBe(0);
// });

// test(`Message Should be 'Task was created successfully'` , async ()=>{
//     const levelOfCommitment = 3;
//     const monetaryCompensation = 2500;
//     const experienceLevel = 4;
//     const skills = 'java,python,c++';
//     expect.assertions(1);
//     const response = await funcs.partnerPostTask(levelOfCommitment,monetaryCompensation,experienceLevel,skills);
//     expect(response.msg).toBe('Task was created successfully');
// });

// test(`Message Should be 'This Partner is not responsible for this Application'` , async ()=>{
//     const levelOfCommitment = 3;
//     const monetaryCompensation = 2500;
//     const experienceLevel = 4;
//     const skills = 'java,python,c++';
//     expect.assertions(1);
//     const response = await funcs.partner2PostTask(levelOfCommitment,monetaryCompensation,experienceLevel,skills);
//     expect(response.Unauthorized).toBe('This Partner is not responsible for this Application');
// });

// test(`Message Should be 'This Application has not been reviewed yet'` , async ()=>{
//     const levelOfCommitment = 3;
//     const monetaryCompensation = 2500;
//     const experienceLevel = 4;
//     const skills = 'java,python,c++';
//     expect.assertions(1);
//     const response = await funcs.partnerPostTaskNotReviewed(levelOfCommitment,monetaryCompensation,experienceLevel,skills);
//     expect(response.error).toBe('This Application has not been reviewed yet');
// });

test(`Message Should be 'This application can only be posted by a consultant'` , async ()=>{
    const levelOfCommitment = 3;
    const monetaryCompensation = 2500;
    const experienceLevel = 4;
    const skills = 'java,python,c++';
    expect.assertions(1);
    const response = await funcs.partnerPostTaskNeedConsultancy(levelOfCommitment,monetaryCompensation,experienceLevel,skills);
    expect(response.Unauthorized).toBe('This application can only be posted by a consultant');
});

// test(`Message Should be 'Response Saved'` , async ()=>{
//     const theReponse = 'accepted';
//      expect.assertions(1);
//     const response = await funcs.partnerRespond(theReponse);
//      expect(response.msg).toBe('Response Saved');
// });

// test(`Message Should be 'This Task Can Only be posted by a Consultant'` , async ()=>{
//     const theReponse = 'accepted';
//     expect.assertions(1);
//     const response = await funcs.partnerRespondNeedConsultancy(theReponse);
//     expect(response.Unauthorized).toBe('This Task Can Only be posted by a Consultant');
// });

// test(`Message Should be 'This Partner is not responsible for this task'` , async ()=>{
//     const theReponse = 'accepted';
//     expect.assertions(1);
//     const response = await funcs.partner2Respond(theReponse);
//     expect(response.Unauthorized).toBe('This Partner is not responsible for this task');
// });

// test(`Message Should be 'This Member did not apply for This Task'` , async ()=>{
//     const theReponse = 'accepted';
//     expect.assertions(1);
//     const response = await funcs.partnerRespondNotMember(theReponse);
//     expect(response.error).toBe('This Member did not apply for This Task');
// });

// test('Task Should be reviewed', async ()=>{
//     expect.assertions(1);
//     const response = await funcs.review();
//     expect(response.data.reviewed).toBeTruthy();
// });

// test('Extra Attributes length should be 3' , async ()=>{
//     const extra = 'Test Extra';
//     expect.assertions(1);
//     const response = await funcs.addExtra(extra);
//     expect(response.data.extra.length).toBe(3);
// });

// test(`Message Should be 'Task was updated successfully'` , async ()=>{
//     const levelOfCommitment = 4;
//     const monetaryCompensation = 4000;
//     const experienceLevel = 5;
//     const skills = 'java,python,node,express,react';
//     expect.assertions(1);
//     const response = await funcs.editTask(levelOfCommitment,monetaryCompensation,experienceLevel,skills);
//     expect(response.msg).toBe('Task was updated successfully');
// });

// test(`Message Should be 'Task Successfully deleted'` , async ()=>{
//     expect.assertions(1);
//     const response = await funcs.deleteTask();
//     expect(response.msg).toBe('Task Successfully deleted');
// });

// test(`Message Should be 'Task was created successfully'` , async ()=>{
//     const levelOfCommitment = 4;
//     const monetaryCompensation = 4000;
//     const experienceLevel = 5;
//     const skills = 'java,python,node,express,react';
//     expect.assertions(1);
//     const response = await funcs.consultantPostTask(levelOfCommitment,monetaryCompensation,experienceLevel,skills);
//     expect(response.msg).toBe('Task was created successfully');
// });

// test(`Message Should be 'This Task can only be submitted by the Partner'` , async ()=>{
//     const levelOfCommitment = 4;
//     const monetaryCompensation = 4000;
//     const experienceLevel = 5;
//     const skills = 'java,python,node,express,react';
//     expect.assertions(1);
//     const response = await funcs.consultantPostTaskNeedConsultancy(levelOfCommitment,monetaryCompensation,experienceLevel,skills);
//     expect(response.Unauthorized).toBe('This Task can only be submitted by the Partner');
// });

// test(`Message Should be 'This Application has not been reviewed yet'` , async ()=>{
//     const levelOfCommitment = 4;
//     const monetaryCompensation = 4000;
//     const experienceLevel = 5;
//     const skills = 'java,python,node,express,react';
//     expect.assertions(1);
//     const response = await funcs.consultantPostTaskNotReviewed(levelOfCommitment,monetaryCompensation,experienceLevel,skills);
//     expect(response.error).toBe('This Application has not been reviewed yet');
// });

